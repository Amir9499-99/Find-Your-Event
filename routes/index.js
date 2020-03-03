var express = require('express');
var router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/users');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('users', { title: 'Main Page' });
// });

// The root route renders our only view
router.get('/', userCtrl.index);

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
module.exports = router;
