const EventEmitter = require('events');
//first letter is capital it indicates that it is a class

const emitter = new EventEmitter();
//emitter is object. (object is actual instance of class)

emitter.on('messageLogged', function(item){
    console.log(item)
})

//Register a listener
// Order of llisterer is important here
//Listener accept 2 parameters 1: emitter name 2: callback function
console.log('here');
emitter.emit('messageLogged', 'hi');
//Register an event(Raise a noice)