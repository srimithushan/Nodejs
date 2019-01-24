var events = require('events');
var eventEmitter = new events.EventEmitter();


var myEventHandler = function () {
  console.log('I bark when I see strangers !');
}

//Assign the eventhandler to an event:
eventEmitter.on('bark', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('bark');
