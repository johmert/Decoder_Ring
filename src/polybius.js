// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const square = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', '(i/j)', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
  ]
  function polybius(input, encode = true) {
    const message = input.toLowerCase();
    let characters = message.split('');
    if(encode){
      for(let i=0; i<characters.length; i++){
        let number = ' ';
        for(let j=0; j<square.length; j++){
          let temp = square[j].find(letter => characters[i] === letter);
          if(temp) number = (square[j].indexOf(temp)+1).toString() + (j+1).toString();
        }
        if(characters[i] === 'i' || characters[i] === 'j') number = 42;
        characters[i] = number;
      }
    } else {
      for(let k=0; k<characters.length-1; k+=2){
        
      }
    }
    const result = characters.join('');
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
