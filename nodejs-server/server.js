const http = require('http');
const fs = require('fs');


const port = 8080;
const server = http.createServer((req, res)=>{

    res.setHeader('Content-Type',  'text/html')

    if(req.url==='/' && req.method==='GET'){
        res.statusCode = 200;
        fs.readFile('./index.html','utf-8',  (error, data)=>{
       
            if(!error){
               res.write(data);
                console.log(data);
               return res.end()      
            }
        })
    }

    if(req.url==='/' && req.method ==='POST'){


        // Buffer;
        let body = '';

        req.on('data', (chunk)=>{ body+=chunk});

        req.on('end', ()=>{
            const [,data ] = body.split('=');
            fs.writeFileSync('data.txt', data);
        })

        // Redirect the user to home page 
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()

     }

    // Default fallback 
        // res.statusCode = 404;
        // res.write('<h1> Invalid Route</h1>')
        // res.end()
    
})

server.listen(port, console.log(`Server running on port ${port}`))