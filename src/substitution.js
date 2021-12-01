// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = ['a','b','c','d','e','f','g','h','i',
  'j','k','l','m','n','o','p','q','r','s','t','u','v', 'w','x','y','z'];

  function checkAlphabet(alphabet){
    if(alphabet.length !== 26) return false;
    for(let i=0; i<alphabet.length; i++){
      const index = alphabet.indexOf(alphabet[i]);
      const lastIndex = alphabet.lastIndexOf(alphabet[i]);
      if(index !== lastIndex) return false;
    }
    return true;
  }

  function letterSwap(message, alphabet1, alphabet2){
    let result = '';
    for(let i=0; i<message.length; i++){
      if(message[i] === ' ') result += ' ';
      for(let j=0; j<alphabet1.length; j++){
        if(message[i] === alphabet1[j]){
          result += alphabet2[j]
        }
      }
    }
    return result;
  }

  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;
    if(!checkAlphabet(alphabet)) return false;
    let message = input.toLowerCase();
    message = message.split('');
    let scrambledAlphabet = alphabet.toLowerCase();
    scrambledAlphabet = scrambledAlphabet.split('');
    if(encode){
      message = letterSwap(message, standardAlphabet, scrambledAlphabet);
    } else if(!encode){
      message = letterSwap(message, scrambledAlphabet, standardAlphabet);
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
