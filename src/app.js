const WebSocket = require('rpc-websockets').Client

const ws = new WebSocket('ws://localhost:3000')


const messageForm = document.querySelector('#messageForm')
const inputRoomId = messageForm.querySelector('#roomId')
const inputUserId = messageForm.querySelector('#userId')
const inputMessage = messageForm.querySelector('#message')

messageForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const messageObject = {
        roomId: inputRoomId.value,
        text: inputMessage.value,
        userId: inputUserId.value,
    }
    ws.call('create-message', messageObject)
        .then(result => {
            console.info('Added message with id %s to room with id %s', result._id, result.room)
        })
        .catch(error => console.log(error.message))
})







