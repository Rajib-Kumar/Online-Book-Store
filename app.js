// DECLARATION
var express = require('express');
var app = express();
var port = 1337;

var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var login = require('./controllers/login');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var author = require('./controllers/author');

var register= require('./controllers/register');

var userinfo= require('./controllers/userinfo');

var contact_us = require('./controllers/contact_us');

var bookList = require('./controllers/bookList');
var topBooks = require('./controllers/topBooks');




// CONOFIGURE
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'html/views'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'sryigoahlnsdbflsidyf', saveUninitialized: true, resave: false}));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap3/dist')));
app.use(express.static('./node_modules/jquery/dist'));
app.use(express.static('./public'));


// ROUTES

app.get('*', function(req, res, next){
	if(req.url == '/' || req.url == '/login' || req.url=='/register')
	{
		next();
		return;
	}
	
    

	if(req.session.loggedUser == null)
	{
		res.redirect('/login');
		return;
	}
	next();
});

app.get('/', function(req, res){
	res.redirect('/login');
});

app.use('/login', login);
app.use('/register',register);
app.use('/logout', logout);
app.use('/home', home);
app.use('/author', author);

app.use('/userinfo',userinfo);

app.use('/contact_us',contact_us);

app.use('/bookList',bookList);
app.use('/topBooks',topBooks);



// SERVER START
app.listen(port, function(){
	console.log('Listenting at port ' + port + ' ...');
});