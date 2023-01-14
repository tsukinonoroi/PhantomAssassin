var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Phantom = require("../models/phantom").Phantom
//var checkAuth = require("./../middleware/checkAuth.js")




/* GET cats listing. */
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка фантомов</h1>');
});


/* Страница героев 
checkAuth убираем, пака так как проверка сессии написана на монго
*/
router.get("/:nick", function(req, res, next) {
db.query(`SELECT * FROM cats WHERE cats.nick = '${req.params.nick}'`, (err, phantoms) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(cats.length == 0) return next(new Error("Нет такого фантома!!!!"))
var cat = cats[0];
res.render('cat', {
title: cat.title,
picture: cat.avatar,
desc: cat.about
})
// result(null, results);
}
})
// Cat.findOne({nick:req.params.nick}, function(err, cat){
// if(err) return next(err)
// if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
// res.render('cat', {
// title: cat.title,
// picture: cat.avatar,
// desc: cat.desc,
// });
// })
});


module.exports = router;

