var express = require('express');
var router = express.Router();
const passport = require('passport');
const ticketsCtrl = require('../controllers/tickets');

// The root route renders our only view
router.get('/', ticketsCtrl.index);

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/tickets',
      failureRedirect: '/'
    }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
module.exports = router;
