
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: '68fc17e4b4c5542c8f8b185467654e4d',
  privateKey: 'ac01615b348de06793d8085f2627aaa36cb41add'
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/characters', function(req, res) {
	marvel.characters.findAll(100)
.then(function success(data) {
	res.send(data);
}).catch(function error(err) {
	console.log(err)
})
});

app.get('/api/character', function(req, res) {
	marvel.characters.findByName()
	.then(function success(data) {
	res.send(data)
	}).catch(function err(err) {

	})
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});



var server = app.listen(process.env.PORT || 3000);

module.exports = server;
