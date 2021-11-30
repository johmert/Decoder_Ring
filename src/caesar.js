// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift > 25 || shift < -25 || !shift) return false;
    let shiftDirection = shift;
    if(!encode) shiftDirection -= (shift*2);
    const message = input.toLowerCase();
    let characters = message.split('');
    for(let i=0; i<characters.length; i++){
      const letter = alphabet.find(letter => letter === characters[i]);
      if(letter) { 
        const index = alphabet.indexOf(letter);
        let shifted = index + shiftDirection;
        if(shifted > 25) {
          shifted-=26;
        } else if( shifted < 0) {
          shifted+=26;
        }
        characters[i] = alphabet[shifted]; 
      }  
    }
    const result = characters.join('');
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
