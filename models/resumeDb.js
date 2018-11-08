const mongoose = require('mongoose');
mongoose.connect('mongodb://anarchymonkey:Aniket1996@ds151453.mlab.com:51453/resume',{ useNewUrlParser: true });

let dbSchema = new mongoose.Schema({

  name : String,
  phone : String,
  email : String ,
  edu : String ,
  skills : String,
  hobbies : String,
  experience : String,
  image : String ,

});

let dbModel = mongoose.model('resume',dbSchema);

module.exports = dbModel;
