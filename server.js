const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Import routes
const routes = require('./routes');

// express setup
const app = express();
const port = process.env.PORT || 5000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // for logging

// sessions setup - tracking user log in status
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// express connection test
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// Serve up static assets
app.use(express.static('client/build'));
// Add routes, both API and route to client/build
app.use(routes);

// Set up passport to authenticate
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/polished2.0');

app.listen(port, () => console.log(`API is listening on port ${port}`));