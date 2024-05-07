const EventEmitter = require('events');
const http = require('http')


//class

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales();

//listners

myEmitter.on("newStore",()=>{
    console.log('There is new opening in Agra');
})

myEmitter.on("newStore",()=>{
    console.log('Shop owner name : Shailesh')
})

//argument

myEmitter.on('newStore',stock =>{
    console.log(`There are now ${stock}items left in stock.`)
})




myEmitter.emit('newStore',9) //clicking on a button

/////////////////////////////////////////////////////////
const server = http.createServer();

server.on('request',(req,res)=>{
    console.log('Request received')

    res.end('Request received ')
});

server.on('close',()=>{
    console.log('Server closed')
})

//Starting of the server
server.listen(8000,'127.0.0.1',()=>{
    console.log('Waiting for request')
})

