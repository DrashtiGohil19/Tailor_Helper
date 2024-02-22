const rateWorkerModel = require('../model/rateWorkerModel')
const workModel = require('../model/workModel')
const workerModel = require('../model/workerModel')

// ---- add worker ----

exports.addWorker = async (req, res) => {
    try {
        var data = await workerModel.create(req.body)
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            error
        })
    }
}

// ---- add, update rate worker ---

exports.rate_worker = async (req, res) => {
    try {
        const existingRate = await rateWorkerModel.findOne();
        if (!existingRate) {
            const newRate = await rateWorkerModel.create(req.body)
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

exports.getRateWorker = async (req, res) => {
    try {
        const userId = req.query.userId
        const result = await rateWorkerModel.findOne({ userId: userId });
        res.status(200).json({
            status: "success",
            result
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
}
// ---- view worker ----

exports.view_worker = async (req, res) => {
    try {
        var limit = 10;
        var page_no = req.query.page_no;
        if (page_no == undefined) {
            page_no = 1;
        }
        var start = (page_no - 1) * limit;
        const userId = req.query.userId
        var data = await workerModel.find({ userId: userId }).skip(start).limit(limit);
        var total_record = await workerModel.find().count();
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

// ---- single worker ----

exports.single_worker = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await workerModel.findById(id);
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

// ---- update single worker ----

exports.update_worker = async (req, res) => {
    try {
        var id = req.params.id;
        var update = req.body;
        var data = await workerModel.findByIdAndUpdate(id, update);
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

// ---- add work of worker ----

exports.add_work = async (req, res) => {
    try {
        var rate_data = await rateWorkerModel.findOne();
        var obj = {
            date: req.body.date,
            shirt: req.body.shirt,
            pent: req.body.pent,
            kurta: req.body.kurta,
            withdrawal: req.body.withdrawal,
            worker_id: req.body.worker_id,
            total_shirt: rate_data.shirt_rate * req.body.shirt,
            total_pent: rate_data.pent_rate * req.body.pent,
            total_kurta: rate_data.kurta_rate * req.body.kurta
        }
        var data = await workModel.create(obj)
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            error
        })
    }
}

// ---- delete worker ----

exports.delete_worker = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await workerModel.findByIdAndDelete(id)
        var work_data = await workModel.deleteMany({ worker_id: id })
        res.status(200).json({
            status: "success",
            data,
            work_data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            error
        })
    }
}

// ---- search worker ----

exports.search_worker = async (req, res) => {
    try {
        const { userId, mobileNumber } = req.query;
        var data = await workerModel.find({ userId: userId, mobilenu: mobileNumber })
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

// ---- workerprofile ----

exports.workerProfile = async (req, res) => {
    try {
        const worker_id = req.query.data_id;
        const selectedMonth = parseInt(req.query.selectedMonth);
        const selectedYear = parseInt(req.query.selectedYear);
        const startDate = new Date(selectedYear, selectedMonth - 1, 1);
        const endDate = new Date(selectedYear, selectedMonth, 1);

        const data = await workModel.find({
            worker_id: worker_id,
            date: {
                $gte: startDate.toISOString().slice(0, 10),
                $lt: endDate.toISOString().slice(0, 10),
            },
        });

        res.status(200).json({
            status: "success",
            data
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
};
