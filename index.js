const express = require('express');
const { Worker } = require('worker_threads');
const app = express();



app.get('/non-blocking', (req, res) => {
    res.send('It is the Non-blocking thread.')
})

app.get('/blocking', async (req, res) => {

    performBlockingOperation().then(counter => {
        res.send(`It is the non-blocking thread. Counter: ${counter}`);
    });

});

function performBlockingOperation() {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i <= 10000000000; i++) {
            counter = i;
        }
        resolve(counter);
    });
}



app.get('/blocking-worker', (req, res) => {

    const worker = new Worker('./worker0.js')


    worker.on('message', data => {
        res.send(`It is the blocking thread.'${data}`)
    })

    worker.on('error', error => {
        res.send(`It is the blocking thread.'${error}`)
    })
})



app.listen(3001, () => {
    console.log('server is live.');
    // console.log(`worker pid = ${process.pid}`)
})