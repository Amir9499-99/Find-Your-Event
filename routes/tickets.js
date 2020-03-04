var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET tickets listing. */

router.get('/', ticketsCtrl.main);
router.get('/new', ticketsCtrl.new);
router.post('/create', ticketsCtrl.create);
router.get('/:id', ticketsCtrl.show);

module.exports = router;


//router.post create a ticket