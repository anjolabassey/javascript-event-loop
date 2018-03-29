var worker = new Worker('webworker.js');

//handles message received from webworker
worker.addEventListener('message', function (e) {
    console.log(e.data);
}, false);

worker.postMessage("I am working");
