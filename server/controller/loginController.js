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
                if (data[0].isLoggedIn) {
                    var token = jwt.sign({ id: data[0].id }, "tailor");
                    res.status(200).json({
                        status: "Success",
                        token,
                        data
                    });
                } else {
                    res.status(403).json({
                        status: "Permission Denied! You can not login to this app.",
                    });
                }
            }
            else {
                res.status(200).json({
                    status: "Wrong password! Please check Your Password."
                })
            }
        }
        else {
            res.status(200).json({
                status: "Wrong user name! Please check Your User name.",
            })
        }
    } catch (error) {
        res.status(200).json({
            status: "Failed to login! Please try again.",
            error
        })
    }
}

exports.logOut = async (req, res) => {
    try {
        const user = await loginModel.findOne({ email: req.body.email });
        if (user) {
            user.isLoggedIn = req.body.isLoggedIn;
            await user.save();

            res.status(200).json({
                status: "success",
                user
            });
        } else {
            res.status(404).json({
                status: "Error",
                message: "User not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Internal server error",
            error: error.message,
        });
    }
};

exports.userData = async (req, res) => {
    try {
        const id = req.query.id
        const user = await loginModel.findById(id)
        res.status(200).json({
            status: "Success",
            user
        });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Internal server error",
            error: error.message,
        });
    }
};

exports.AllUsers = async (req, res) => {
    try {
        const users = await loginModel.find({ role: "user" })
        res.status(200).json({
            status: "sucesfully find user",
            users
        });
    } catch (error) {
        res.status(404).json({
            status: "Error",
            message: "User not found",
        });
    }
}
