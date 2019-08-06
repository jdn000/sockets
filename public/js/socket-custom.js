var socket = io();
socket.on('connect', function() {

    console.log("conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Se perdio la conexion con el servidor");
});

//enviar informacion

socket.emit('enviarMensaje', {
    usuario: 'Julio',
    mensaje: 'holahola'
}, function(resp) {
    console.log('Respuesta server', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});