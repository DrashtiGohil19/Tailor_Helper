var jwt = require('jsonwebtoken');

const checktoken = (req,res,next) => {
    jwt.verify(req.headers.authorization,"tailor",next);
} 

module.exports = { checktoken }