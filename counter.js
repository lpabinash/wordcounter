var word = document.getElementById("words");
var character = document.getElementById("characters");
var space = document.getElementById("spaces");
var line = document.getElementById("lines");
var textarea = document.getElementById("textarea");
let inputValue, numberOfWords, numberOfSpaces, numberOfLines;

textarea.oninput=(e) => {
  inputValue = e.target.value;

  if (inputValue !== null && inputValue !== "") {
    character.innerHTML = inputValue.length;

    numberOfSpaces = inputValue.split(" ").length-1;
    space.innerHTML = numberOfSpaces;

    numberOfWords = inputValue.match(/[\w\d\’\'-]+/gi).length;
    word.innerHTML = numberOfWords;

    numberOfLines = (inputValue.match(/\n/g) || '').length + 1;
    
    line.innerHTML = numberOfLines;
  } else {
    character.innerHTML = 0;
    word.innerHTML = 0;
    space.innerHTML = 0;
    line.innerHTML = 0;
  }
};



