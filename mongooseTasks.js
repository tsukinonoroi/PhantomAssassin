var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Pa = require("./models/Pa").Pa


var pa = new Pa({
title: "Фантомка",
nick: "Arcana"
})


console.log(Pa)
pa.save(function(err,Pa,affected){
console.log(Pa.title)
})


