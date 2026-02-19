const mongose = require('mongoose');

const SCHEMA_POSITION = new mongose.Schema({
  number: {
    type: String,
    required: [true, "Number is required"],
   minlength: [4, "Number must be at least 4 characters long"]
  },
  saldo: {
    type: Number,
    required: [true, "Balance is required"],
  },
  data_criacao: {
    type: Date,
    required: [true, "Creation date is required"],
  }
}); 