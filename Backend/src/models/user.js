var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const User = new mongoose.Schema({
  firstName: {type: String, required: [true, "First Name is required"]},
  lastName: {type: String, required: [true, "Last Name is required"]},
  telephoneNumber: {type: Number, unique: true, required: [true, "Nombre Requerido"]},
  fullAddress: {type: String, lowercase: true, required: [true, "Correo Requerido"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  ssn: {type: Number, unique: true, required: [true, "Celular requerido"]}
});

User.plugin(uniqueValidator, {message: 'Data already registered.'});

module.exports = mongoose.model('User', User);