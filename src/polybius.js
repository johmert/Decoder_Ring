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

  function convertToNumber(characters){
    let convertedMessage = [];
    for(let i=0; i<characters.length; i++){
      let number = ' ';
      for(let j=0; j<square.length; j++){
        let index = square[j].find(letter => characters[i] === letter);
        if(index) number = (square[j].indexOf(index)+1).toString() + (j+1).toString();
      }
      if(characters[i] === 'i' || characters[i] === 'j') number = '42';
      convertedMessage.push(number);
    }
    return convertedMessage;
  }

  function convertToLetter(characters){
    let convertedMessage = [];
    for(let i=0; i<characters.length-1; i+=2){
      const index1 = parseInt(characters[i]);
      const index2 = parseInt(characters[i+1]);
      const letter = square[index2-1][index1-1];
      convertedMessage.push(letter);
    }
    return convertedMessage;
  }

  function findSpaces(message){
    let spaceIndexArray = [];
    for(let i=0; i<message.length;i++){
      if(message[i] === ' '){
        spaceIndexArray.push(i/2);
      }
    }
    return spaceIndexArray;
  }

  function polybius(input, encode = true) {
    const message = input.toLowerCase();
    const characters = message.split('');
    let convertedMessage;
    if(!encode){
      let temp = characters.filter(letter => letter !== ' ');
      if(temp.length % 2 !== 0) return false;
      let spaceIndexArray = findSpaces(characters);
      convertedMessage = convertToLetter(temp);
      spaceIndexArray.forEach(index => {
        convertedMessage.splice(index, 0, ' ');
      })
    } else {
      convertedMessage = convertToNumber(characters);
    }
    const result = convertedMessage.join('');
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
