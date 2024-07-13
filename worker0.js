const { parentPort } = require('worker_threads');

let counter = 0;
for (let i = 0; i <= 10000000000; i++) {
    // console.log(i)  This will block the Event Loop, hence the non-blocking service also get blocked
    counter = i;
}




parentPort.postMessage(counter);
