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
let image;
var skillarr;
/* get resume page form */

router.post('/',function(req,res){

name = req.body.name;
phone = req.body.phone;
email = req.body.email,
edu = req.body.education;
skills = req.body.skills;
hobbies = req.body.hobbies;
experience = req.body.experience;
image = req.body.image;

skillsarr = req.body.skills.split(' ');

console.log(skillsarr[3]);
res.redirect('/');
});

router.get('/',function(req,res){
  res.render('viewResume',{
                            name : name,
                            phone : phone,
                            email : email,
                            edu : edu,
                            skillsarr:skillsarr,
                            hobbies:hobbies,
                            experience:experience,
                            image:image
                          });
});

module.exports = router;
