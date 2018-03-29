// handles message sent to the webworker
self.addEventListener('message', function(e) {

    self.postMessage('I said' + e.data);
    
}, false);

//worker terminate  itself
self.close();