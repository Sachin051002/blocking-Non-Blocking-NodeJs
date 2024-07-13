// This is just an example to minimize the time for the same operation



const express = require('express');
const { Worker } = require('worker_threads');
const app = express();



app.get('/non-blocking', (req, res) => {
    res.send('It is the Non-blocking thread.')
})



function createWorker(){
    return new Promise((resolve,reject)=>{
        const worker = new Worker('./worker4.js', {
            workerData:{threadCount:4}
        })

        worker.on('message',data=>{
            console.log(data)
            resolve(data);
        })

        worker.on('error',error=>{
            reject(error)
        })
    })
}



app.get('/blocking',async (req,res)=>{


    const workerArray = [];
    for(let i = 0;i<4;i++){
        workerArray.push(createWorker());
    }

    let threadAll = await Promise.all(workerArray);
    
    let count = threadAll.reduce((acc,curr)=>acc+curr,0);

    res.send(`It is the blocking thread.'${count}`)

})

app.listen(3001, () => {
    console.log('server is live.');
})




