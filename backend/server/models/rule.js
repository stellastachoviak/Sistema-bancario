const mongose = require('mongoose');

const SCHEMA_POSITION = new mongose.Schema({
  description: {
    type: String,
    required: [true, "Description is required"],
   minlength: [20, "Description must be at least 20 characters long"]
  },
  payment: {
    type: Number,
    required: [true, "Payment is required"],
  }
}); 