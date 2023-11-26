var express = require('express');
var router = express.Router();

const cors = require('cors');
const { addWorker, rate_worker, view_worker, add_work, delete_worker, single_worker, search_worker, update_worker, workerProfile } = require('../controller/workerController');
const { checktoken } = require('../middlewere/auth');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/addworker', checktoken, addWorker)
router.post('/rate_worker', rate_worker)
router.get('/rate_worker', rate_worker)
router.get('/viewworker', checktoken, view_worker)
router.get('/single_worker/:id', checktoken, single_worker)
router.put('/update_worker/:id', checktoken, update_worker)
router.get('/search_worker', checktoken, search_worker)
router.get('/workerprofile', checktoken, workerProfile)

router.post('/addwork', checktoken, add_work)
router.delete('/delete_worker/:id', checktoken, delete_worker)

module.exports = router;
