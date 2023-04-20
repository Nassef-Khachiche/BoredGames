const { createServer } = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const port = 8080;
const app = express();
const server = createServer(app);

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie : {
      maxAge: 1000 * 60 * 60 * 24,
    }
}));

//sets up a middleware function so the server can use the json from requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("."));

// Set view engine
app.set("view engine", "ejs");
app.set('views', 'views');

//it sets up all the routes with the correct controller
app.use('/', require('./router'));

app.get('/', function(req, res) { 
  res.render('authorization/login');
});

app.get('/login', function(req, res) { 
  res.render('authorization/login');
});

app.get('/register', function(req, res) { 
  res.render('authorization/register');
});

app.get('/dashboard', function(req, res) { 
  res.render('dashboard');
});

app.get('/settings', function(req, res) { 
  res.render('guessthenumber/settings');
});

app.get('/guess', function(req, res) { 
  res.render('guessthenumber/guessthenumber', { req : req, res : res});
});

app.get('/guess/leaderboard', function(req, res) { 
  res.render('guessthenumber/leaderboard');
});

app.get('/memory', function(req, res) { 
  res.render('memory/memory');
});

app.get('/memory/leaderboard', function(req, res) { 
  res.render('memory/leaderboard');
});

app.get('/leaderboards', function(req, res) { 
  res.render('leaderboards');
});

app.get('/puzzle', function(req, res) { 
  res.render('puzzle/puzzle');
});
  
server.listen(port, () => {
  console.log(`Guess the number is live on localhost:${port}`);
});