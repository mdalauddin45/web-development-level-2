const EventEmiter = require('events')

const myEmiter = new EventEmiter()
//listener 

myEmiter.on('birthday',()=>{
    console.log(`Happy birthday to you `)
})
myEmiter.on('birthday',(gift)=>{
    console.log(`i will send you a birthday gift ${gift}`)
})

myEmiter.emit('birthday','watch')