const customerModel = require("../model/customerModel");
const pentModel = require("../model/pentModel");
const shirtModel = require("../model/shirtModel");

exports.add_measurement = async (req, res) => {
    try {
        const {
            register_nu, extra_p, weist, p_length, hip, round, thigh, knee, knee1, knee2, bottom, extra_s, s_length, shoulder, sleeve, sleeve1, sleeve2, chest, chest1, chest2, front, front1, front2, coller, cuff, s_note, p_note
        } = req.body;

        const customer_id = req.params.id
        const pent_obj = {
            customer_id: customer_id,
            extra_p, weist, p_length, hip, round, thigh, knee, knee1, knee2, bottom, p_note
        };
        const pent_data = await pentModel.create(pent_obj);

        const shirt_obj = {
            customer_id: customer_id,
            extra_s, s_length, shoulder, sleeve, sleeve1, sleeve2, chest, chest1, chest2, front, front1, front2, coller, cuff, s_note
        };
        const shirt_data = await shirtModel.create(shirt_obj);

        await customerModel.findByIdAndUpdate(customer_id, {
            $set: {
                register_nu: register_nu,
                pent_id: pent_data._id,
                shirt_id: shirt_data._id
            }
        });

        res.status(200).json({
            status: "success",
            pent_data,
            shirt_data,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
};

// ---- transaction data ----

// exports.transaction = async (req, res) => {
//     try {
//         const {
//             customer_id, pent_qty, shirt_qty, booking_date, delivery_date,
//         } = req.body;
//         const record_obj = {
//             customer_id, pent_qty, shirt_qty, booking_date, delivery_date,
//         }
//         const record_data = await recordModel.create(record_obj)
//         res.status(200).json({
//             status: "success",
//             record_data
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: "failed",
//             error
//         });
//     }
// }

// ---- view measurement ----

exports.view_measurement = async (req, res) => {
    try {
        const { customer_id } = req.query;
        var data;

        if (customer_id) {
            data = await customerModel
                .findById(customer_id)
                .populate('pent_id')
                .populate('shirt_id')
                .exec();
            // } else if (mobilenu) {
            //     data = await customerModel
            //         .findOne({ mobilenu })
            //         .populate('pent_id')
            //         .populate('shirt_id')
            //         .exec();
        } else {
            data = await customerModel
                .find()
                .populate('pent_id')
                .populate('shirt_id')
                .exec();
        }

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            error,
        });
    }
};

// ---- update measurement ----

exports.update_Measurement = async (req, res) => {
    try {
        var id = req.params.id
        const {
            register_nu, extra_p, weist, p_length, hip, round, thigh, knee, knee1, knee2, bottom, extra_s, s_length, shoulder, sleeve, sleeve1, sleeve2, chest, chest1, chest2, front, front1, front2, coller, cuff, p_note, s_note
        } = req.body;

        const pent_obj = {
            extra_p: extra_p, weist: weist, p_length: p_length, hip: hip, round: round, thigh: thigh, knee: knee, knee1: knee1, knee2: knee2, bottom: bottom, p_note: p_note
        };
        const pent_data = await pentModel.updateOne({ customer_id: id }, pent_obj)

        const shirt_obj = {
            extra_s: extra_s, s_length: s_length, shoulder: shoulder, sleeve: sleeve, sleeve1: sleeve1, sleeve2: sleeve2, chest: chest, chest1: chest1, chest2: chest2, front: front, front1: front1, front2: front2, coller: coller, cuff: cuff, s_note: s_note
        };
        const shirt_data = await shirtModel.updateOne({ customer_id: id }, shirt_obj);

        const customerData = await customerModel.findByIdAndUpdate(id, { register_nu })

        res.status(200).json({
            status: "success",
            pent_data,
            shirt_data,
            customerData
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        });
    }
}
