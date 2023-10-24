var express = require('express');
var router = express.Router();
const { addCustomer, view_customer, search_customer, delete_customer, single_customer, update_customer, last_customer, get_name, customerProfile } = require('../controller/customerController');
const { add_rate, get_rate, update_rate } = require('../controller/rateController');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/add_customer', addCustomer)
router.get('/view_customer', view_customer)
router.get('/search_customer', search_customer)
router.delete('/delete_customer/:id', delete_customer)
router.get('/single_customer/:id', single_customer)
router.put('/update_customer/:id', update_customer)
router.get('/customerprofile/:id', customerProfile)

router.post('/add_rate', add_rate)
router.get('/view_rate', get_rate)
router.put('/update_rate', update_rate)
// router.get('/last_customer', last_customer)
// router.get('/get_name', get_name)

module.exports = router;
