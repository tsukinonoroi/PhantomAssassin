var express = require('express');
var router = express.Router();

/*pa*/
router.get('/PhantomAssassin', function(req, res, next) {
  res.render('phantom', {
      title: "Phantom Assassin",
      picture: "images/phantom1.png",
      desc: "Phantom Assassin"
  });
});

/*arcana*/
router.get('/Arcana', function(req, res, next) {
  res.render('phantom', {
      title: "Phantom Assassin with Arcana-item",
      picture: "images/phantom_arcana.png",
      desc: "Arcana"
  });
});




module.exports = router;
