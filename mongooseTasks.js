var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Pa = require("./models/pa").Pa


var pa = new Pa({
title: "Фантомка",
nick: "Arcana"
})


console.log(pa)
pa.save(function(err,pa,affected){
console.log(pa.title)
})


