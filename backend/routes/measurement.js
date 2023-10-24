var express = require('express');
var router = express.Router();
const { add_measurement, view_measurement, update_Measurement } = require('../controller/measurementController');

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.post('/add_measurement',add_measurement)
router.get('/view_measurement',view_measurement)
router.put('/update_map/:id',update_Measurement)

module.exports = router;
