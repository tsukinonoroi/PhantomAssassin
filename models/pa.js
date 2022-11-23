var mongoose = require('mongoose')
var Schema = mongoose.Schema


var paSchema = new Schema({
title: String,
nick: { 
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Pa = mongoose.model("Pa", paSchema)

