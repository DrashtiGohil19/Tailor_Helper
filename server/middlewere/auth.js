var jwt = require('jsonwebtoken');

const checktoken = (req, res, next) => {
    jwt.verify(req.headers.authorization, "tailor", (err, decoded) => {
        if (err) {
            res.status(401).json({ status: "error", message: "Unauthorized" });
        } else {
            next();
        }
    });

}

module.exports = { checktoken }