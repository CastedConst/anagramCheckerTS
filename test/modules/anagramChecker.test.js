const anagramChecker = require('./../../dist/modules/anagramChecker');

describe( 'anagramCheckerTest', () => {

  test('AnagramChecker success case', () => {
    let checker = new anagramChecker.anagramChecker;
    expect(checker.compareWords('state', 'taste')).toBe(true);
  });

  test('AnagramChecker error case', () => {
    let checker = new anagramChecker.anagramChecker;
    expect(checker.compareWords('cat', 'dog')).toBe(false);
  });

  test('AnagramChecker whitespace and other case', () => {
    /**
     * Note
     * 
     * this is not a usefull usage for the intended use-case, but
     * must be supported in order to be resilient to not expected input
     * Recommend to keep this behavior in case of future usage with non-latin unicode characters  
     */
    let checker = new anagramChecker.anagramChecker;
    expect(checker.compareWords(' %&(§µ@€ABC128', 'ABC128§µ@€ %&(')).toBe(true);
  });

  test('sortAndReturnCharacters success case', () => {
    let checker = new anagramChecker.anagramChecker;
    expect(checker.sortAndReturnCharacters('state')).toBe('aestt');
  });

  test('sortAndReturnCharacters whitespace and other case', () => {
    /**
     * Note
     * 
     * this is not a usefull usage for the intended use-case, but
     * must be supported in order to be resilient to not expected input
     * Recommend to keep this behavior in case of future usage with non-latin unicode characters  
     */
    let checker = new anagramChecker.anagramChecker;
    expect(checker.sortAndReturnCharacters(' %&(§µ@€ABC128')).toBe(' %&(128@ABC§µ€');
  });
});
