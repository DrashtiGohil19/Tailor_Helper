var express = require('express');
var router = express.Router();
const { add_measurement, view_measurement, update_Measurement } = require('../controller/measurementController');

const cors = require('cors');
const { checktoken } = require('../middlewere/auth');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/add_measurement/:id', checktoken, add_measurement)
router.get('/view_measurement', checktoken, view_measurement)
router.put('/update_map/:id', checktoken, update_Measurement)

module.exports = router;
