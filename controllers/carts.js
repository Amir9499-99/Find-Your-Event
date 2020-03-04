const Cart = require('../models/cart');
module.exports = {
    index,
};

function index(req, res) {
    res.render('carts', {
        user: req.user,
    })
}