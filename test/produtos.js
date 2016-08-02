var express = require('../config/express')();
var request = require('supertest')(express);



describe('#ProdutosController', function() {
	it('#lista retornando json', function(done) {
		beforeEach(function(done) {
			var conn = express.infra.connectionFactory();
			conn.query("delete from produtos", function(ex, results) {
				if(!ex) {
					done();
				}
			});
		});
		request.get('/produtos')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(200, done);
		});

	it('#cadastro de um novo produto com dados inválidos', function(done) {
		request.post('/produtos')
		.send({titulo:"", descricao:"livro teste"})
		.expect(400,done);
	});

	it('#cadastro de um novo produto com dados válidos', function(done) {
		request.post('/produtos')
		.send({titulo:"produto teste", preco:50.10, descricao:"livro teste"})
		.expect(302,done);
	});
})
