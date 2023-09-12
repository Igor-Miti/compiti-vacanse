var net = require('net');

var portNumber = process.argv[2];

function Numero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

var server = net.createServer(function (socket) {
    var date = new Date();
    
    var year   = date.getFullYear();
    var month  = Numero(date.getMonth() + 1);
    var day    = Numero(date.getDate());
    var hour   = Numero(date.getHours());
    var minute = NUmero(date.getMinutes());
    
    var dateString = year + '-' + month + '-' + day;
    dateString = dateString + ' ' + hour + ':' + minute;
    
    socket.end(dateString + '\n');
});

server.listen(portNumber); 