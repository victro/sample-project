var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const User = new mongoose.Schema({
  firstName: {type: String, required: [true, "First Name is required"]},
  lastName: {type: String, required: [true, "Last Name is required"]},
  telephoneNumber: {type: Number, unique: true, required: [true, "Telephone Number is required"]},
  fullAddress: {type: String, lowercase: true, required: [true, "Full Address is required"]},
  ssn: {type: String, unique: true, required: [true, "Social Security Number is required"], index: true} 
});

User.plugin(uniqueValidator, {message: 'Data already registered.'});

module.exports = mongoose.model('User', User);