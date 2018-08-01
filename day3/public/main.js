var socket = io('http://localhost:3000');

var tfUsername = document.getElementById('tfUsername'),
    tfMsg = document.getElementById('tfMsg'),
    btnSend = document.getElementById('btnSend'),
    feedback = document.getElementById('feedback'),
    output = document.getElementById('output');

tfMsg.onkeypress = function() {
    socket.emit('user_typing', {
        username: tfUsername.value
    });
};

socket.on('user_typing', function(data) {
    feedback.innerHTML = data;
});

socket.on('messages', function(data) {
    var msg = '<p><b>' + data.username + '</b>: '
        + data.message + '</p>';
    output.innerHTML += msg;
});

btnSend.onclick = function() {
    socket.emit('chat', {
        username: tfUsername.value,
        message: tfMsg.value
    });
    tfMsg.value = '';
    tfMsg.focus();
    feedback.innerHTML = '';
};
