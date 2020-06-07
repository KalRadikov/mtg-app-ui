const Express = require('express')()
const Http = require('http').Server(Express)
const Socketio = require('socket.io')(Http)

const position = {
  x: 200,
  y: 200
}

Socketio.on('connection', (socket) => {
  socket.emit('position', position)
  socket.on('move', (data) => {
    switch (data) {
      case 'left':
        position.x -= 20
        Socketio.emit('position', position)
        break

      case 'right':
        position.x += 20
        Socketio.emit('position', position)
        break

      case 'up':
        position.y -= 20
        Socketio.emit('position', position)
        break

      case 'down':
        position.y += 20
        Socketio.emit('position', position)
        break
    }
  })
})

Http.listen(3001, () => {
  console.info('listening at :3001...')
})