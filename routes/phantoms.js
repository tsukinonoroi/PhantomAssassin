var express = require('express');
var router = express.Router();
var Phantom = require("../models/phantom").Phantom
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с phantoms');
});

/* Страница фантомов */
router.get('/:nick', checkAuth,function(req, res, next) {
    Phantom.findOne({nick:req.params.nick}, function(err,phantom){
        if(err) return next(err)
        if(!phantom) return next(new Error("Нет такого фантома :("))
        res.render('phantom', {
            title: phantom.title,
            picture: phantom.avatar,
            desc: phantom.desc
        })
    })
})

  
  module.exports = router