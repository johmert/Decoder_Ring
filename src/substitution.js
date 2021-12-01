// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  function checkAlphabet(alphabet){
    if(alphabet.length !== 25) return false;
    for(let i=0; i<alphabet.length; i++){
      for(let j=1; j<alphabet.length; j++){
        if(alphabet[i] === alphabet[j]){
          return false;
        }
      }      
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if(!checkAlphabet(alphabet)) return false;
    let message = input.toLowerCase();
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
