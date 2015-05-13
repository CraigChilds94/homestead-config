var express = require('express');
var router = express.Router();
var reader = require('../app/reader');

/* GET home page. */
router.get('/', function(req, res, next) {

    var data = {title: 'Homestead Configuration'};

    var home = process.env.HOME || process.env.USERPROFILE;
    var conf = reader.read(home + '/.homestead/Homestead.yaml', true);

    data.conf = conf;
    res.render('index', data);
});

module.exports = router;
