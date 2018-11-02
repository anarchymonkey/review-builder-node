/* all the require part for start apps */

const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.set("view-engine","ejs");
app.use(express.static("public"));
