const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('Card game server is running');
});

io.on('connection', (socket) => {
    console.log('Гравець підключився');

    socket.on('disconnect', () => {
        console.log('Гравець відключився');
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
