import * as morseObject from './morseObject.js';

const submit = document.querySelector('button');
const input = document.querySelector('input');
const outputOriginal = document.querySelector('#original p');
const outputMorse = document.querySelector('#morse p');

const sentenceConverter = mushroom => {
  const morseObjectEntire = morseObject.normalMorseCharacters;

  const morseCodeOfSentence = mushroom.map(arrayChar => {
    return morseObjectEntire[arrayChar];
  });

  // console.log(morseCodeOfSentence);
  const joined = morseCodeOfSentence.join(', ');
  // console.log(joined);
  return joined;
};

const insertIntoHTML = (rainbow, unicorn) => {
  outputOriginal.innerHTML = `${rainbow}`;
  outputMorse.innerHTML = `${unicorn}`;
};

const formSubmission = event => {
  event.preventDefault();
  const sentence = input.value;
  const sentenceArray = sentence.split('');
  const morseCode = sentenceConverter(sentenceArray);
  insertIntoHTML(sentence, morseCode);
};

submit.addEventListener('click', formSubmission);
