const express = require('express');
const http = require('http');

app.get('/', (req,res) => res.send('hello from express app'))

const server = app.listen(5000, () => {
    console.log('server started, running smoke test...');
    http.get('http://localhost:5000/', (res) =>{
        console.log('status: ${res.statusCode}');
        if (res.statusCode === 200) {
            console.log('smaoke test passed');
            server.close();
            process.exit(0);
        } else {
            server.close();
            process.exit(1);

        }
        
    }).on('error', (err) => {
        console.error('request failed:', err.message);
        server.close();
        process.exit(1);
    });
});