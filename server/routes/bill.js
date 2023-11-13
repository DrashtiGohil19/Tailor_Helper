var express = require('express');
var router = express.Router();
const { add_bill, get_billData, orders, delivery_alert, updateStatus, generate_pdf, get_pdf } = require('../controller/billController');
const { checktoken } = require('../middlewere/auth');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/add_bill', checktoken, add_bill)
router.get('/bill_data', checktoken, get_billData)

router.get('/order', checktoken, orders)
router.put('/update_status/:id', checktoken, updateStatus)
router.get('/delivery_alert', checktoken, delivery_alert)

module.exports = router;
