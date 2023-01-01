var net = require('net');

var server = net.createServer(function(socket) {

  socket.on('data', function(data){
    var textChunk = data.toString('utf8');
    console.log(textChunk);
  });
});

server.listen(8030, '0.0.0.0');
