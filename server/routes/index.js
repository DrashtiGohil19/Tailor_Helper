var express = require('express');
const cors = require('cors');
const { login, register, logOut, userData } = require('../controller/loginController');
var router = express.Router();

router.use(cors());

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logOut)
router.get('/userdata', userData)
module.exports = router;
