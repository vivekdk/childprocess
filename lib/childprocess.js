/*

*/
var child_process = require('child_process').fork;

module.exports = function (app, db){

	return {
		childprocess : function(req, res) {

			var child = child_process('./lib/childprocesslogic.js');

			child.on ('message', function (data){
				
				var data = new Buffer(data).toString();

				if (data == 'done'){
					child.kill();
					res.send (200);
				}
				else{
					console.log(data);
				}
			});	
		}
	}
};


