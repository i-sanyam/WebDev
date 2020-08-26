const passport = require("passport");
const config = require("./test.json");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: config.google.client_id,
  clientSecret: config.google.secret_id,
  callbackURL: "/auth/google/redirect",
},
  function (token, tokenSecret, profile, done) {
    console.log("token", token);
    console.log("token-secret", tokenSecret);
    console.log("profile", profile);
    return done(null, profile);
  }
));