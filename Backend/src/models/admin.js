var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const Admin = new mongoose.Schema({
  email: {type: String, required: [true, "Email is required"]},
  password: {type: String, required: [true, "Password is required"]},
});

Admin.plugin(uniqueValidator, {message: 'Data already registered.'});

module.exports = mongoose.model('Admin', Admin);