var util=require('util');
var http=require('http');
var io=require('socket.io');
var koa=require('koa');

var app=koa();
var server=http.Server(app.callback());
var ws=io(server);

ws.on('connection', function(socket){
  console.log(util.inspect(socket, true, null, true));
});

server.listen(3000);

