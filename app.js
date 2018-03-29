/**
 * Module dependencies.
 */
const R = require('./config/urls');
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const env = process.env.NODE_ENV || "development";
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const seeder = require('./helpers/seeder');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
if (env == 'development') {
  dotenv.load({path: '.env'});
}


/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home.controller');
const userController = require('./controllers/user.controller');
const contactController = require('./controllers/contact.controller');
const kiembapController = require('./controllers/kiembap.controller');

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, (error) => {
  if (error) {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  }

  // Feed some data in DB
  seeder.createUsers();
});


/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
    req.path !== '/login' &&
    req.path !== '/signup' && !req.path.match(/^\/auth/) && !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  } else if (req.user &&
    req.path === '/account') {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get(R.ROOT, homeController.index);
app.get(R.LOGIN, userController.getLogin);
app.post(R.LOGIN, userController.postLogin);
app.get(R.LOGOUT, userController.logout);
app.get(R.FORGOT, userController.getForgot);
app.post(R.FORGOT, userController.postForgot);
app.get(R.RESET_TOKEN, userController.getReset);
app.post(R.RESET_TOKEN, userController.postReset);
app.get(R.SIGN_UP, userController.getSignup);
app.post(R.SIGN_UP, userController.postSignup);
app.get(R.CONTACT, contactController.getContact);
app.post(R.CONTACT, contactController.postContact);

app.get(R.KIEMBAP, kiembapController.getKiembap);
app.post(R.KIEMBAP, kiembapController.postKiembap);

app.get(R.ACCOUNT, passportConfig.isAuthenticated, userController.getAccount);
app.post(R.ACCT_PROFILE, passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post(R.ACCT_PASSWORD, passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post(R.ACCT_DEL, passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get(R.ACCT_UNLINK, passportConfig.isAuthenticated, userController.getOauthUnlink);
app.get(R.USERNAME, userController.getSEOPage);



/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
