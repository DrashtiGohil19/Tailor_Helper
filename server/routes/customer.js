var express = require('express');
var router = express.Router();
const { addCustomer, view_customer, search_customer, delete_customer, single_customer, update_customer, customerProfile, rate_customer } = require('../controller/customerController');

const cors = require('cors');
const { checktoken } = require('../middlewere/auth');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/add_customer', checktoken, addCustomer)
router.get('/view_customer', checktoken, view_customer)
router.get('/search_customer', checktoken, search_customer)
router.delete('/delete_customer/:id', checktoken, delete_customer)
router.get('/single_customer/:id', checktoken, single_customer)
router.put('/update_customer/:id', checktoken, update_customer)
router.get('/customerprofile/:id',checktoken, customerProfile)

router.post('/ratecustomer', rate_customer)
router.get('/ratecustomer', rate_customer)


module.exports = router;
