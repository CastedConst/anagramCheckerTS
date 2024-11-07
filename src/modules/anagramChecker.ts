export class anagramChecker {

    constructor() {
    }

    public compareWords(leftWord:string, rightWord:string): boolean {
        return this.sortAndReturnCharacters(leftWord) === this.sortAndReturnCharacters(rightWord); 
    }

    private sortAndReturnCharacters(word:string) {
        return word.split('').sort().join('');
    }
}
