'use strict';

const fs=require('fs');
const chalk=require('chalk');
const prompt=chalk.blue('\nprompt>');

function cat(filenames){
	filenames=filenames.split(' ');
	const texts=[];
	var count=0;
	filenmaes.forEach(function(filename,i){
		fs.readFile(filename, {encode:'utf8'}, function(err, text){
			if (err) throw err;
			texts[i]=text;
			count++;
			if (count===filenames.length){
				process.stdout.write(texts.join(' '));
				process.stdout.write(prompt);
			}
		});
	});
}


function head(filename){
	fs.readFile(filename, {encoding: 'utf8'}, function(err, text){
		if (err) throw err;
		process.stdout.write(text.split('\n').slice(0,5).join('\n'));
		process.stdout.write(prompt);
	});
}

function tail(filename){
	fs.readFile(filename, {encoding: 'utf8'}, function(err, text){
		if (err) throw err;
		process.stdout.write(text.split('\n').slice(-5).join('\n'));
		process.stdout.write(prompt);
	});
}

function sort(filename){
	fs.readFile(filename, {encoding:'utf8'}, function(err, text){
		if (err) throw err;
		process.stdout.write(text.split('\n').sort().joint('\n'));

	})
}

function wc(filename){
	fs.readFile(filename, {encoding:'utf8'}, function(err, text){
		if (err) throw err;
		process.stdout.write(text.split('\n').length;
		
	})
}


function unq(filename){
	fs.readFile(filename, {encoding:'utf8'}, function(err, text){
		if (err) throw err;
		const lines=text.split('\n');
		for (var i=0; i<lines.length; i++){
			lines.splice(i, 1);
			i--;
		}
	}	
    process.stdout.write(lines.join('\n'));
		
		
	})
}






