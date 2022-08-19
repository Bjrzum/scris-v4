var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SCRIS', active: 1 });
});

router.get('/salidas', function(req, res, next) {
  res.render('salidas', { title: 'Salidas', active: 2  });
});

router.get('/ausentes', function(req, res, next) {
  res.render('ausentes', { title: 'Ausentes', active: 3  });
});

router.get('/tabla', function(req, res, next) {
  res.render('tabla', { title: 'Tabla', active: 4 });
});

router.get('/registros', function(req, res, next) {
  res.render('registros', { title: 'Registros', active: 5 });
});

router.get('/avanzado', function(req, res, next) {
  res.render('avanzado', { title: 'Avanzado', active: 6  });
});

module.exports = router;
