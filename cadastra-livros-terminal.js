var http = require('http');

var config = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(config, function(res) {
    console.log(res.statusCode);
    console.log(res.body);

    res.on('data', function (body) {
        console.log('BODY: ' + body);
    });
});

var produto = {
    titulo: 'mais sobre node',
    descricao: 'node javascript',
    preco: 100
};

cliente.end(JSON.stringify(produto));