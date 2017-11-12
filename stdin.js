'use strict'
const fs=require('fs');
const chalk=require('chalk');
const prompt=chalk.blue('\nprompt>');

function pwd(){
	process.stdout.write(process.cwd());
	process.stdout.write(prompt);

}

function data(){
	process.stdout.write(Date());
	process.stdout.write(prompt);
}

function ls(){
	fs.readdir('.', function(err, filenames){
		if (err) throw err;
		process.stdout.write(filenames.join('\n'));
		process.stdout.write(prompt);
	});
}

function echo(arg){
	const output=args.split(' ').map(function(arg){
		return (arg[0]==='$')? process.env[arg.slice(1)]: arg;
	})
	.join(' ');
	process.stdout.write(output);
	process.stdout.write(prompt);
}



module.exports={
	pwd: pwd,
	date: date,
	ls: ls

}

//alternate

module.exports.pwd=function pwd(){
	process.stdout.write(process.cwd());
}