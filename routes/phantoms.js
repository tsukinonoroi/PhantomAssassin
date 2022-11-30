var express = require('express')
var router = express.Router()
var Phantom = require("../models/phantom").Phantom
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с phantoms')
});

/* Страница фантомов */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Phantom.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Phantom.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var phantom = result[0]
            var heroes = result[1] || []
            if(!phantom) return next(new Error("Нет такого котенка в мультике Три кота"))
            res.render('phantom', {
                title: phantom.title,
                picture: phantom.avatar,
                desc: phantom.desc,
                menu: heroes
            });
        })
})

module.exports = router
