const loginModel = require('../model/loginModel')
var jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        var data = await loginModel.create(req.body)
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: "Failed to register",
            error
        })
    }
}

exports.login = async (req, res) => {
    try {
        var data = await loginModel.find({ email: req.body.email });
        if (data.length > 0) {
            if (data[0].password == req.body.password) {
                var token = jwt.sign({ id: data[0].id }, "tailor");
                res.status(200).json({
                    status: "Success",
                    token
                })
            }
            else {
                res.status(200).json({
                    status: "Wrong password! Please check Your Password."
                })
            }
        }
        else {
            res.status(200).json({
                status: "Wrong email! Please check Your Email Address.",
            })
        }
    } catch (error) {
        res.status(200).json({
            status: "Failed to login! Please try again.",
            error
        })
    }
}