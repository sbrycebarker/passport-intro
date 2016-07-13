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

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashsync(password, bcrypt.genSaltSync(0), null);
};
//compareSync password

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
