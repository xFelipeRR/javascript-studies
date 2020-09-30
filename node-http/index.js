const http = require('http')

const server = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method)
    console.log('HEADERS: ', req.headers)
    console.log('HTTP VERSÃO: ', req.httpVersion)


    if(req.method === "POST"){
        res.writeHead(201, {
            'Content-type': 'application/json'
        })
    
    res.write('{"message": "Cadastro efetuado com sucesso!"}')
    }

    if(req.method === "GET"){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Programador a bordo</title>
        </head>
        <body>
            <h1>Programador a bordo</h1>
        </body>
        </html>
        `)
    }

   

   res.end()


})

server.listen(3001, () => {
    console.log('Servidor funcionando!')
})