const qwerty = document.getElementById('#qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');
let missed = 0;
const phrases = ["There is always money in the banana stand", "All the best cowboys have daddy issues", "Live together die alone", "Everybody hates Hugo", "Stranger in a strange land"];

buttonReset.addEventListener('click', () => {
  const overlay = buttonReset.parentNode;
  overlay.style.display = 'none';
});

const getRandomPhraseAsArray = (array) => {
  //function to get a random number and then get random array that is passed to it
  const random = Math.floor(Math.random() * array.length);
  const phrase = array[random].split("");
  return phrase;
}

const newPhrase = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (array) => {
  for(let i=0; i<array.length; i++){
    let ul = document.querySelector('#phrase ul');
    let li = document.createElement('li');
    li.textContent = array[i];

    console.log(li)
    if(li.textContent !== ' '){
      li.className = 'letter';
    } else{
      li.className = 'space';
    }
    ul.appendChild(li);
  }
}


addPhraseToDisplay(newPhrase);