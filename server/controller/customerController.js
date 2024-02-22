const billModel = require('../model/billModel');
const customerModel = require('../model/customerModel');
const pentModel = require('../model/pentModel');
const rateCustomerModel = require('../model/rateCustomer');
const shirtModel = require('../model/shirtModel');

// ---- add customer ----

exports.addCustomer = async (req, res) => {
    try {
        const userId = req.body.userId
        const latestBill = await customerModel.findOne({ userId: userId }, {}, { sort: { 'bill_nu': -1 } });
        let newBillNumber = 1;

        if (latestBill) {
            newBillNumber = latestBill.bill_nu + 1;
        }
        const newCustomer = {
            customername: req.body.name,
            mobilenu: req.body.mobilenu,
            bill_nu: newBillNumber,
            userId: req.body.userId
        };
        var data = await customerModel.create(newCustomer);
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

// ---- view customer ----

exports.view_customer = async (req, res) => {
    try {
        var limit = 10;
        var page_no = req.query.page_no;
        if (page_no == undefined) {
            page_no = 1;
        }
        var start = (page_no - 1) * limit;
        const userId = req.query.userId
        var data = await customerModel.find({ userId: userId }).skip(start).limit(limit);
        var total_record = await customerModel.find({ userId: userId }).count();
        var totalpage = Math.ceil(total_record / 10)
        res.status(200).json({
            status: "success",
            data,
            totalpage,
            total_record, limit, page_no,
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

// ---- search customer ----

exports.search_customer = async (req, res) => {
    try {
        const { mobileNumber, billNumber, userId } = req.query;
        if (!mobileNumber && !billNumber) {
            return res.status(400).json({ error: 'Provide at least one search parameter.' });
        }
        let query = { userId };
        if (mobileNumber) {
            query.mobilenu = mobileNumber;
        }
        if (billNumber) {
            query.bill_nu = billNumber;
        }
        const data = await customerModel.find(query)
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

// ---- delete customer ----

exports.delete_customer = async (req, res) => {
    try {
        var id = req.params.id;
        var customer = await customerModel.findByIdAndDelete(id)
        var pentData = await pentModel.deleteMany({ customer_id: id })
        var shirtData = await shirtModel.deleteMany({ customer_id: id })
        var billData = await billModel.deleteMany({ customer_id: id })
        res.status(200).json({
            status: "Customer and associated data deleted",
            customer, pentData, shirtData, billData
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            error
        })
    }
}

// ---- single customer ----

exports.single_customer = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await customerModel.findById(id);
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

// ---- update customer ----

exports.update_customer = async (req, res) => {
    try {
        var id = req.params.id;
        var update = req.body;
        var data = await customerModel.findByIdAndUpdate(id, update);
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

// ---- get customer history ----

exports.customerProfile = async (req, res) => {
    try {
        var id = req.params.id;
        var customerData = await billModel.find({ customer_id: id })
        var data = await customerModel.findById(id)
        res.status(200).json({
            status: "success",
            customerData, data
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
}

// ---- add, get, update rate worker ---

exports.rate_customer = async (req, res) => {
    try {
        const { userId } = req.body;

        const existingRate = await rateCustomerModel.findOne({ userId });

        if (!existingRate) {
            const newRate = await rateCustomerModel.create(req.body);

            res.status(201).json({
                status: "success",
                newRate
            });
        } else {
            existingRate.set(req.body);
            await existingRate.save();

            res.status(200).json({
                status: "success",
                existingRate
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
};

exports.getRateCustomer = async (req, res) => {
    try {
        const userId = req.query.userId
        const result = await rateCustomerModel.findOne({ userId: userId })
        res.status(200).json({
            status: "success",
            result
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
}
