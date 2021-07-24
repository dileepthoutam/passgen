#! node
const program = require('commander');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

program.version('1.0.0').description('Simple Password Generator');

program
	.option('-l, --length <number>', 'length of passworld', '8')
	.option('-s, --save', 'save password to passwords.txt')
	.option('-nn, --no-numbers', 'remove numbers')
	.option('-ns, --no-symbols', 'remove symbols')
	.parse();

const {length, save, numbers, symbols} = program.opts();

// get generated password 
const generatedPassword = createPassword(length, numbers, symbols);
// save to file
if (save) {
	savePassword(generatedPassword);
}
// copy to clipboard 
clipboardy.writeSync(generatedPassword);
// output generated password 
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Password copied to clipboard'));