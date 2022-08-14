var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.post('/hello', function create(req, res, next) {
    console.dir(req.body);
    console.log(JSON.stringify(req.body))
    res.send(201, Math.random().toString(36).substr(3, 8));
    return next();
});

server.listen(8080, function () {
    server.use(restify.plugins.bodyParser({ mapParams: true }));
    console.log('%s listening at %s', server.name, server.url);
});