var express = require('express');
var router = express.Router();

let name;
let phone;
let email;
let edu;
let skills;
let hobbies;
let experience;
let compact;
/* get resume page form */

router.post('/',function(req,res){

name = req.body.name;
phone = req.body.phone;
email = req.body.email,
edu = req.body.education;
skills = req.body.skills;
hobbies = req.body.hobbies;
experience = req.body.experience;

res.redirect('/');
});

router.get('/',function(req,res){
  res.render('viewResume',{name : name,
                            phone : phone,email : email, edu : edu,skills:skills,hobbies:hobbies,experience:experience});
});

module.exports = router;
