
/*
  Child process logic
*/

process.stdin.resume();

// On incoming data from parent
process.on ('data', function (data){

});

process.on ('message', function (message){
	console.log('recieved message from parent---' + message);
});

process.send ('done');

