const mongose = require('mongoose');

const SCHEMA_POSITION = new mongose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
   minlength: [4, "Name must be at least 4 characters long"]
  },
  cpf: {
    type: String,
    required: [true, "CPF is required"],
  },
  nascimento: {
    type: String,
    required: [true, "Birth date is required"],
  },
  telefone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  senha: {
    type: String,
    required: [true, "Password is required"],
  },
  tipo: {
    type: String,
    required: [true, "Type is required"],
    }

}); 

module.exports = mongose.model('Person', SCHEMA_POSITION);