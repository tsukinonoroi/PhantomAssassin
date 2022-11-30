var express = require('express');
var router = express.Router();
var Pa = require("../models/Pa").Pa


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с phantoms');
});

/* Страница Фантомов */
router.get('/:nick', function(req, res, next) {
    Pa.findOne({nick:req.params.nick}, function(err,Pa){
        if(err) return next(err)
        if(!Pa) return next(new Error("Такого фантома нет!"))
        res.render('Pa', {
            title: Pa.title,
            picture: Pa.avatar,
            desc: Pa.desc
        })
    })
})


module.exports = router;