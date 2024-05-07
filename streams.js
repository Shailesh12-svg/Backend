//Read a large file system and send it to the client
const fs = require('fs')
const server = require('http').createServer();

server.on('request',(req,res)=>{
    //Sol 1
    // fs.readFile('test-file.txt',(err,data)=>{
    //   if(err)console.log(err);
    //   res.end(data);  
    // })
    //Sol 2 use streams
    // const readable  = fs.createReadStream('test-file.txt')
    // readable.on('data',chunk=>{
    //     res.write(chunk)
    // })
    // readable.on('end',()=>{
    //     res.end();
    // })
    // readable.on('error',err=>{
    //     console.log(err);
    //     res.statusCode(500);
    //     res.end('File not found')
    // })


    //Sol3 pipe
    const readable = fs.createReadStream('test-file.txt')
    readable.pipe(res);
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listenig...')
})