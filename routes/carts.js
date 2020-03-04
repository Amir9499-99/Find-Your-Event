var express = require('express');
var router = express.Router();
const cartsCtrl = require('../controllers/carts');

/* GET tickets listing. */

router.get('/', cartsCtrl.index);


//router.post too add ticket to the cart
//router.delete too delete tickets from the cart
module.exports = router;
