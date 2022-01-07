const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

app.use(express.static('public'));

const io = socket(server);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/javascript', (req, res) => {
  res.sendFile(`${__dirname}/public/javascript.html`);
});

app.get('/swift', (req, res) => {
  res.sendFile(`${__dirname}/public/swift.html`);
});

app.get('/css', (req, res) => {
  res.sendFile(`${__dirname}/public/css.html`);
});


//tech namespace
const tech = io.of('/tech');
tech.on('connection', socket => {
  socket.on('join', data => {
    socket.join(data.room);
    tech.in(data.room).emit('message', `New user joined ${data.room} room!!`);
  });

  socket.on('message', data => {
    tech.in(data.room).emit('message', data.msg);
  });

  socket.on('disconnect', () => {
    tech.emit('message', 'user disconnected');
  });
});
