const Profile = require("../../models/profile");
const User = require("../../models/user");

module.exports = {
  create,
  read,
  update,
  Profiledelete,
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

async function read(req, res) {
  try {
    const profile = await Profile.findOne({ email: req.body.email });
    return res.json(profile);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const profile = await Profile.updateOne(
      { email: req.body.email },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        addressCity: req.body.addressCity,
        addressState: req.body.addressState,
        addressZip: req.body.addressZip,
        streetAddress: req.body.streetAddress,
      }
    );
    return res.json(profile);
  } catch (err) {
    res.status(400).json(err);
  }
}


async function Profiledelete(req,res){
  try {
    const profile = await Profile.deleteOne({email: req.body.email});
    return res.json(profile);
  } catch(err){
    res.status(400).json(err);
  }

}