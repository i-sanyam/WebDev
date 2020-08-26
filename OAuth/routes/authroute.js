const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.send("screen not configured yet");
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['openid', 'profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect',
  (req, res) => {
    res.send('you reached the redirect URI');
  });

module.exports = router;