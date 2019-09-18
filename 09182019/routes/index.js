var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get Color Page
router.get('/color/', (req, res, next) => {
  
  var colors = ["red", "green", "blue"];
  var color = colors[Math.floor(Math.random() * colors.length)];

  res.render('color', 
    { 
      tite: 'Random Color',
      color: color
    })
})

module.exports = router;
