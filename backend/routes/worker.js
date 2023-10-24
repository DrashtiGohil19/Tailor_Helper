var express = require('express');
var router = express.Router();

const cors = require('cors');
const { addWorker, rate_worker, view_worker, add_work, delete_worker, single_worker, search_worker, update_worker, workerProfile } = require('../controller/workerController');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

router.post('/addworker', addWorker)
router.post('/rate_worker', rate_worker)
router.get('/rate_worker', rate_worker)
router.get('/viewworker', view_worker)
router.get('/single_worker/:id', single_worker)
router.put('/update_worker/:id', update_worker)
router.get('/search_worker', search_worker)
router.get('/workerprofile', workerProfile)

router.post('/addwork', add_work)
router.delete('/delete_worker/:id', delete_worker)

module.exports = router;
