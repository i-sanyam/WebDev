const express = require('express');
const passportSetup = require('./config/passport-setup');
const authRouter = require('./routes/authroute');
const app = express();

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

// use config here
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render("index");
});
