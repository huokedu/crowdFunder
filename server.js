var express = require('express');
// var path = require('path')
var bodyParser = require('body-parser');
var cors 		= require('cors');
// import massive from 'massive';
var config 		= require('./config.js');
var massive = require('massive');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
let router = express.Router();
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config.dev';
// const compiler = webpack(webpackConfig);
// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: false
// }));
// app.use(webpackHotMiddleware(compiler));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// })




var connect = massive.connectSync({connectionString: config.connectionString});
app.set('db', connect);
var db = app.get('db');


// var db = massive.connect({connectionString: config.connectionString},
//   function(err, localdb){
//     db = localdb;
//     app.set('db', db);
//   }
// )
// var strategy = new Auth0Strategy({
//     domain:       process.env.AUTH0_DOMAIN,
//     clientID:     process.env.AUTH0_CLIENT_ID,
//     clientSecret: process.env.AUTH0_CLIENT_SECRET,
//     callbackURL:  process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
//   }, function(accessToken, refreshToken, extraParams, profile, done) {
//     // accessToken is the token to call Auth0 API (not needed in the most cases)
//     // extraParams.id_token has the JSON Web Token
//     // profile has all the information from the user
//     return done(null, profile);
//   });
//
// passport.use(strategy);
//
// // This can be used to keep a smaller payload
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
//
// app.use(passport.initialize());
// app.use(passport.session());

var usersCtrl = require('./server/controllers/usersCtrl') ;
var projectsCtrl = require('./server/controllers/projectsCtrl') ;




// router.post('/api/users', (req, res) => {
//   const {username, password, timezone, email} = req.body;
//   dom.create_user([username, password, timezone, email], function (err, result) {
//     if (err) {
//       res.status(500).send(err)
//     }else {
//       res.json({ success: true });
//     }
// })
// })


app.post('/user', usersCtrl.Create);
// app.get('/login', usersCtrl.Login);
// app.get('/logout', usersCtrl.Logout);
// app.get('/callback', usersCtrl.Callback);

app.get('/api/projects', projectsCtrl.GetAll)
app.post('/api/project', projectsCtrl.Create)






app.listen(3000, function () {
  console.log('Running localhost 3000')
})




//
// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';
//
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config.dev';
//
// import users from './controllers/usersCtrl';
//
// let app = express();
//
// app.use(bodyParser.json());
//
// app.use('/api/users', users);
//
// const compiler = webpack(webpackConfig);
//
// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: true
// }));
// app.use(webpackHotMiddleware(compiler));
//
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });
//
// app.listen(3000, () => console.log('Running on localhost:3000'));
