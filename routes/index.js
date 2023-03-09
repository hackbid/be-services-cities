const router = require('express').Router();
const Controller = require('../controllers/index');

router.get('/province', Controller.GetProvince);
router.get('/city', Controller.GetCity);
router.get('/city/:id', Controller.GetCityById);
router.post('/cost', Controller.PostCost);

module.exports = router;
