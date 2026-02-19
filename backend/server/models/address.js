const mongose = require('mongoose');

const SCHEMA_POSITION = new mongose.Schema({
  pais: {
    type: String,
    required: [true, "Name is required"],
   minlength: [4, "Name must be at least 4 characters long"]
  },
  uf: {
    type: Number,
    required: [true, "Payment is required"],
  },
  cep: {
    type: String,
    required: [true, "CEP is required"],
  },
  cidade: {
    type: String,
    required: [true, "City is required"],
  },
   rua: {
    type: String,
    required: [true, "Street is required"],
  },
}); 