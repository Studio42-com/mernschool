const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  streetAddress: {type: String, required: true},
  addressCity: {type: String, required: true},
  addressState: {type: String, required: true},
  addressZip: {type: Number, required: true},
  email: {type: String, required: true}

}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});



module.exports = mongoose.model('Profile', profileSchema);