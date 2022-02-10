const Profile = require("../../models/profile");

module.exports = {
  create,
  read
};

async function create(req, res) {
  try {
    // Add the user to the DB
    console.log(req.body);
    const profile = await Profile.create(req.body);
    return res.json(profile);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function read(req,res) {
  try {
    const user = Users.findOne({ 'email': req.body.email });
    return res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }


}