var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Phantom = require("../models/phantom").Phantom


var phantom = new Phantom({
title: "Arcana",
nick: "arcanaaaaa"
})


console.log(phantom)
phantom.save(function(err, phantom, affected){
console.log(phantom.title)
})


