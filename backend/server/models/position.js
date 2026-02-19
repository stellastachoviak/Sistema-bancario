const mongose = require('mongoose');

const SCHEMA_POSITION = new mongose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
   minlength: [4, "Name must be at least 4 characters long"]
  },
  payment: {
    type: Number,
    required: [true, "Payment is required"],
  }
}); 