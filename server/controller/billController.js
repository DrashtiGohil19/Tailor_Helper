const billModel = require("../model/billModel")
const customerModel = require("../model/customerModel")
const moment = require('moment');

exports.add_bill = async (req, res) => {
    try {
        // const { customer_id, bill_date, booking_date, delivery_date, shirt_qty, pent_qty, kurta_qty, shirt_amt, pent_amt, kurta_amt, total_amt, paid_amt, final_amt } = req.body
        // var obj = {
        //     customer_id, bill_date, booking_date, delivery_date, shirt_qty, pent_qty, kurta_qty, shirt_amt, pent_amt, kurta_amt, total_amt, paid_amt, final_amt
        // }
        var data = await billModel.create(req.body)
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        })
    }
}

exports.get_customerData = async (req, res) => {
    try {
        const mobilenu = req.query.mobilenu;
        const userId = req.query.userId
        const data = await customerModel.findOne({ mobilenu: mobilenu, userId: userId })
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        })
    }
}

// ---- order ----

exports.orders = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: 'Provide userId as a query parameter.' });
        }

        var pendingData = await billModel.find({ status: 0 }).populate({
            path: 'customer_id',
            match: { userId }
        }).exec();

        pendingData = pendingData.filter(order => order.customer_id !== null);

        pendingData.sort((a, b) => new Date(a.delivery_date) - new Date(b.delivery_date));

        var completedData = await billModel.find({ status: 1 }).populate({
            path: 'customer_id',
            match: { userId }
        }).exec();

        completedData = completedData.filter(order => order.customer_id !== null);

        var deliveryData = await billModel.find({ status: 2 }).populate({
            path: 'customer_id',
            match: { userId }
        }).exec();

        deliveryData = deliveryData.filter(order => order.customer_id !== null);

        res.status(200).json({
            status: "success",
            pendingData, completedData, deliveryData
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error: error.message
        });
    }
};

// ----update order status----

exports.updateStatus = async (req, res) => {
    try {
        var id = req.params.id;
        var status = req.body.status;
        var updateStatus = await billModel.findByIdAndUpdate(id, { status: status }, { new: true })
        if (updateStatus.status === 2) {
            await billModel.findByIdAndUpdate(id, { actual_delivery_date: Date.now() })
        }
        res.status(200).json({
            status: "success",
            updateStatus
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message
        })
    }
}

// ---- delivery alert ----

exports.delivery_alert = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: 'Provide userId as a query parameter.' });
        }

        const todayDate = moment().startOf('day').format('DD-MM-YYYY');

        const deliveryData = await billModel.aggregate([
            {
                $addFields: {
                    formattedDeliveryDate: {
                        $dateToString: { format: '%d-%m-%Y', date: '$delivery_date' }
                    }
                }
            },
            {
                $match: {
                    $or: [{ formattedDeliveryDate: todayDate, }, { formattedDeliveryDate: { $lt: todayDate } }],
                    status: { $ne: 2 }
                }
            },
            {
                $lookup: {
                    from: "customer",
                    localField: "customer_id",
                    foreignField: "_id",
                    as: "customer"
                }
            },
            {
                $unwind: "$customer"
            },
            {
                $match: {
                    "customer.userId": userId
                }
            }
        ]);

        res.status(200).json({
            status: "success",
            deliveryData
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error: error.message
        });
    }
};

exports.get_billData = async (req, res) => {
    try {
        const id = req.query.customerId
        const result = await billModel
            .find({ customer_id: id })
            .sort({ createdAt: -1 })
            .limit(1);
        const customerData = await customerModel.findById(id)
        res.status(200).json({
            status: "successfully get data",
            result, customerData
        })
    } catch (error) {
        res.status(500).json({
            status: "failed to get data",
            error
        })
    }
}