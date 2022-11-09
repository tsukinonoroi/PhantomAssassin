var express = require('express');
var router = express.Router();

/* pa*/
router.get('/PhantomAssassin', function(req, res, next) {
  res.render('phantom', {
      title: "Phantom Assassin",
      picture: "images/karamelka.jpg",
      desc: "fff"
  });
});

/* arcana*/
router.get('/Arcana', function(req, res, next) {
  res.render('phantom', {
      title: "Phantom Assassin with Arcana-item",
      picture: "images/karamelka.jpg",
      desc: "Cgfgg."
  });
});




module.exports = router;
