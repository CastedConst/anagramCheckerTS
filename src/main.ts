import { anagramChecker } from './modules/anagramChecker'

let check = new anagramChecker;

const args = process.argv.slice(2);

/**
 * Note: 
 * 
 * Input validation may be extracted into a function for testability
 * Not done here for simplicity reasons, as cmd parameters are generally
 * not the best approach to integrating functionality
 */
if (args.length != 2) {
    console.log('Incorrect number of parameters');
} else {
    console.log('Received words to compare:');
    console.log('Word 1:', args[0]);
    console.log('Word 2:', args[1]);
    console.log('------------------');
    if (check.compareWords(args[0], args[1])) {
        console.log('The words are an anagram');
    } else {
        console.log('The words are NO anagram');
    }  
}

