const mongose = require('mongoose');

const SCHEMA_POSITION = new mongose.Schema({
  numero: {
    type: String,
    required: [true, "Number is required"],
   minlength: [4, "Number must be at least 4 characters long"]
  },
 
  
}); 