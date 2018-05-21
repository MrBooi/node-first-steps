const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');


var figlet = require('figlet');

figlet('Ayabonga', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
const styledMessage = chalk.blue.bold(greet('Xola'));

console.log(styledMessage)
