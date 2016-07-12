var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    session     = require('express-session'),
    passport    = require('passport'),
    keys        = require('./config/keys.js'),
    UserController = require('./controllers/UserController.js');


// App definition
var app = express();

// Require middleware
require('./middleware/appMiddlware')(app);


// require passport config

// Setup passport middleware and sessions


// -> Auth
app.post('/api/auth', passport.authenticate('local-signup', {
   successRedirect : '/',
   failureRedirect : '/signup'
}));

app.get('/api/get-user', UserController.getUser);


// Connections
if (keys.env == 'DEVELOPMENT') { var portNum = 3000; } else { var portNum = 80; }


var mongooseUri = 'mongodb://localhost/auth';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log('Mongoose uri:', mongooseUri);
});

app.listen(portNum, function () {
    console.log('Aliens are watching on port: ' + portNum, 'in ' + keys.env + ' mode.');
});
