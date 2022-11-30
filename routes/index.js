
var express = require('express');
var router = express.Router();
var Pa = require ("../models/Pa").Pa

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
Default PA
router.get('/PhantomAssassin', function(req, res, next) {
  res.render('phantom', {
      title: "Phantom Assassin",
      picture: "images/phantom1.png",
      desc: "Phantom Assassin идёт в наступление, едва завидев свою жертву. Предварительно атаковав противника кинжалом, а затем мгновенно сблизившись с ним, Мортред легко уклоняется от атак и обрушивает на врага удар за ударом, любой из которых может оказаться роковым. "
  });
});

Arcana 
router.get('/Arcana', function(req, res, next) {
  res.render('phantom', {
      title: "Manifold Paradox",
      picture: "images/phantom_arcana.png",
      desc: "Издав хриплый смешок, старший кузнец Крейлер взмахнул мечом, ковавшимся 11 поколениями его семьи. Он был настолько острым, что окружающий мир, с треском разорвавшейся материи, разошелся. Через этот разрыв Крейлер увидел себя несколькими мгновениями ранее, державшего тот же самый вожделенный меч. Вдруг, в приступе алчности и сумасшествия, он сразил своего двойника, чтобы заполучить второй меч. Но, с запозданием Крейлер почувствовал знакомую рану, и внезапно воспоминания о ней нахлынули на него..."
  });
});

Phantom alternative personality 
router.get('/Alternative', function(req, res, next) {
  res.render('phantom', {
      title: "Alternative Personality ",
      picture: "images/alt_pers.png",
      desc: "Асан-изгнанник, втайне взращённый отвергнутыми Сёстрами вуали, всю жизнь стремился к единственной цели: уничтожить ложного пророка, которого его учителя винили в развращении их когда-то святой веры. Одного за другим его стражей забирали кинжалы потаённых убийц, но теперь Асан наконец готов выйти из тени — чтобы исполнить тёмные пожелания своих наставников и воплотить роковые пророчества, вселяющие в оракула ужас."
  });
});
*/
module.exports = router;




