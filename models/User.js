const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Enter valid email'],
  },
  password: {
    type: String,
    required: [true, 'Enter a passoword'],
    minlength: [6, 'Passsword must be minimum 6 characters'],
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
