const express = require("express");
const router = express.Router();
const profileCtrl = require("../../controllers/api/profile");

// POST /api/users
router.post("/save", profileCtrl.create);
router.post("/read", profileCtrl.read);
router.post("/update", profileCtrl.update);
router.post("/delete", profileCtrl.Profiledelete);

//POST /api/profile

module.exports = router;
