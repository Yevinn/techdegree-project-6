const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');
const headline = document.querySelector('.title');
const overlay = buttonReset.parentNode;
let missed = 0;
const phrases = ["There is always money in the banana stand", "All the best cowboys have daddy issues", "Live together die alone", "Everybody hates Hugo", "Stranger in a strange land"];

buttonReset.addEventListener('click', e => {
  overlay.style.display = 'none';
  if(e.target.textContent.toLowerCase() === 'play again'){
    overlay.style.display = 'flex';
    location.reload(true);
  }
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
    if(li.textContent !== ' '){
      li.className = 'letter';
    } else{
      li.className = 'space';
    }
    ul.appendChild(li);
  }
}
 
//add phrase to the page
addPhraseToDisplay(newPhrase);

const checkLetter = btn => {
  const li = document.querySelectorAll('.letter');
  let matched = null;

  for(i = 0; i< li.length; i++){
    if(btn === li[i].textContent.toLowerCase()){
      li[i].classList.add('show');
      matched = true;
    } 
  }
  return matched;
}

qwerty.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON'){
    e.target.classList.add("chosen");
    e.target.disabled = true;
    const guess = e.target.textContent;
    const letterGuess = checkLetter(guess);
    if (!letterGuess) {
      missed++;
      console.log(missed);
      let li = document.querySelectorAll('img');
      li[li.length - missed].src = 'images/lostHeart.png';
    }
    checkWin();
  }
});

const checkWin = () => {
  const letter = document.querySelectorAll('.letter');
  const show = document.querySelectorAll('.show');
  console.log(letter.length + ' Letter ' + show.length + ' show');
  if (letter.length === show.length){
    overlay.classList.add('win');
    headline.textContent = 'Congrats you Won';
    overlay.style.display = 'flex';
    buttonReset.textContent = 'Play Again';
  } else if (missed >= 5){
    overlay.classList.add('lose');
    headline.textContent = 'Sorry, You didn\'t win this time';
    overlay.style.display = 'flex';
    buttonReset.textContent = 'Play Again';
  }
}

