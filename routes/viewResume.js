var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
let name;
let phone;
let email;
let edu;
let skills;
let hobbies;
let experience;
let compact;
let image;
var skillarr;
/* get resume page form */

/* connections and schemas */

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

/* ************************************* */
router.post('/',function(req,res){

name = req.body.name;
phone = req.body.phone;
email = req.body.email,
edu = req.body.education;
skills = req.body.skills;
hobbies = req.body.hobbies;
experience = req.body.experience;
image = req.body.image;

let newUser = {
                          name : name,
                          phone : phone,
                          email : email,
                          edu : edu,
                          skills : skills,
                          hobbies:hobbies,
                          experience:experience,
                          image:image
                        };

    dbModel.create(newUser,function(err,body){

      if(!err)
      {
        console.log('Data Added!!!!');
        console.log(body);
          res.redirect('/view');
      }
      else {
        console.log(err);
      }
    });

});

router.get('/',function(req,res){

  dbModel.find({},function(err,resume){
    if(!err)
    {
      res.render('showResume',{resume : resume});

    }
    else {
      console.log(err);
    }
  });
});

router.get('/:id',function(req,res){
   var id = req.params.id;

   dbModel.findById(id,function(err,resume){
     if(!err)
     {
       res.render('viewResume',{resume:resume});
     }
   })
})

module.exports = router;
