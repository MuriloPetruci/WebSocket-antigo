// WebSockets nos permitem fazer uma comunicação bi direcional entre clientes e servidores. quando fazemos  uma REQ ao servidor e o cliente que esta pedindo uma informação e o servidor apenas respondendo então essa conexão é fechada, com o websockets a conexão permenesse aberta e nessa conexão pode ser enviados varios dados de uma vez só e o clinete pode mandar varoios dados pro servidor e o servidor varios dados para o cliente sem ele ter requisitado nada, com isso a velocidade da informação aumenta. 
// trabalhando na porta 3 mil
var io = require('socket.io')(3000);

//listen chamado connection quando o cliente se conectar ele vai executar essa função e ela recebe um socket

io.on('connection', (socket)=>{
    console.log('novo usuario conectado');

    socket.on('client_hello', (data)=>{
        io.sockets.emit('server_hello', data);
    });
});
