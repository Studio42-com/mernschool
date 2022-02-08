const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profile');


router.post('/save', profileCtrl.create);


module.exports = router;