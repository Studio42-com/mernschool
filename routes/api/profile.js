const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profile');

// POST /api/users
router.post('/save', profileCtrl.create);
router.get('/profile');

//POST /api/profile


module.exports = router;