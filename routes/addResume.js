/* these two lines of require are needed everytime otherwise the routes wont be linked */
var express = require('express');
var router = express.Router();
/* end of important require and router lines */

router.get('/',function(req,res){
  res.render("addResume");
  });
module.exports = router; // this code is essential and has to be kept same, cause express-generator needs it.
