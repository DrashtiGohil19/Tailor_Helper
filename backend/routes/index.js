var express = require('express');
const { login, register } = require('../controller/loginController');
var router = express.Router();

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/register', register)
router.post('/login', login)
module.exports = router;
