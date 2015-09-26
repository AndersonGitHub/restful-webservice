var express = require('express');
var server = express();

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
	extended : true
}));

server.listen(3000);

server.get('/', function (req, res) {
	res.end('Servidor ON');
});

server.get('/teste', function (req, res) {
	res.end('Teste acessada');
});

server.get('/pessoas', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.json([
		{
			nome:'Anderson',
			sobrenome:'Luiz Fernandes Jeronimo',
			email:'anderson.luiz.sjc@gmail.com',			
			observacoes:'desenvolvendo webservice com NodeJS e Express',
			data_nascimento:'09/02/1978'
		},
		{
			nome:'Anderson',
			sobrenome:'Luiz Fernandes Jeronimo',
			email:'anderson.luiz.sjc@gmail.com',			
			observacoes:'desenvolvendo webservice com NodeJS e Express',
			data_nascimento:'09/02/1978'
		}
		])
});

server.get('/pessoas/:id', function (req, res) {
	
});

server.post('/pessoas', function (req, res) {
	
});

server.put('/pessoas', function (req, res) {
	
});

server.delete('/pessoas/:id', function (req, res) {
	
});