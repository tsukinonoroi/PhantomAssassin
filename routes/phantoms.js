
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с phantoms');
});

/* Страница Фантомов */
router.get('/:nick', function(req, res, next) {
    Car.findOne({nick:req.params.nick}, function(err,phantom){
        if(err) return next(err)
        if(!phantom) return next(new Error("Такого фантома нет!"))
        res.render('phantom', {
            title: phantom.title,
            picture: phantom.avatar,
            desc: phantom.desc
        })
    })
})


module.exports = router;