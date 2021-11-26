var express = require('express');
var router = express.Router();
var fs = require('fs');

var databases;

fs.readFile('./public/data/characters.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
  else {
    // parse JSON string to JSON object
    databases = JSON.parse(data);
    // print all databases
    // databases.forEach(db => {
    //   console.log(`${db.name}: ${db.type}`);
    // });
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Dark Souls Chronological Timeline',
    data: databases
  });
});

module.exports = router;
