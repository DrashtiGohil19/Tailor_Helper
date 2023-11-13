const rateCustomerModel = require("../model/rateCustomer")

exports.add_rate = async (req, res) => {
    try {
        var data = await rateCustomerModel.create(req.body)
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

exports.update_rate = async (req, res) => {
    try {
        var update_data = req.body;
        var data = await rateCustomerModel.findOneAndUpdate(update_data)
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

exports.get_rate = async (req, res) => {
    try {
        var data = await rateCustomerModel.findOne()
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

module.exports.rate = async (req, res) => {
    try {
        const existingRate = await rateCustomerModel.findOne();
        if (!existingRate) {
            const newRate = await rateCustomerModel.create(req.body)
            res.status(201).json({
                status: "success",
                newRate
            });
        } else {
            existingRate.set(req.body);
            await existingRate.save();
            res.status(200).json(existingRate);
        }
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
}




