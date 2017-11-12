//console.log(process);
//output a prompt
process.stdout.write('promt>');

var cmd;

process.stdin.on('data', function(data){
	//var cmd=data.toString().trim();
	//process.stdout.write('you typed: '+ cmd);
	//if (cmd==='pwd') process.stdout.write(process.cwd());
	var dateObj=new Date()
	//if (cmd==='date')process.stdout.write(dateObj.toString());
	cmd=data.toString().trim().split(" ");

	//console.log(cmd);
	//if (cmd[0]=='cat') process.stdout.write(cmd.slice(1).join(" "));
})


var commands=require('./commands');


//var userCommand='pwd';
//var lsCommand='ls';


 var catCommand=cmd[0];

//commands[userCommand]();
//commands[lsCommand]();
commands[catCommand](cmd[1]);


