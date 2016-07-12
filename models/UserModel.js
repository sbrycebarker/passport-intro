var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  creationDate: { type: Date, default: Date.now }
});


// methods ======================


// generate hash

//compareSync password


module.exports = mongoose.model('User', UserSchema);
