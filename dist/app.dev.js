"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var morseObject = _interopRequireWildcard(require("./morseObject.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var submit = document.querySelector('button');
var input = document.querySelector('input');
var outputOriginal = document.querySelector('#original p');
var outputMorse = document.querySelector('#morse p');

var sentenceConverter = function sentenceConverter(mushroom) {
  var morseObjectEntire = morseObject.normalMorseCharacters;
  var morseCodeOfSentence = mushroom.map(function (arrayChar) {
    return morseObjectEntire[arrayChar];
  }); // console.log(morseCodeOfSentence);

  var joined = morseCodeOfSentence.join(', '); // console.log(joined);

  return joined;
};

var insertIntoHTML = function insertIntoHTML(rainbow, unicorn) {
  outputOriginal.innerHTML = "".concat(rainbow);
  outputMorse.innerHTML = "".concat(unicorn);
};

var formSubmission = function formSubmission(event) {
  event.preventDefault();
  var sentence = input.value;
  var sentenceArray = sentence.split('');
  var morseCode = sentenceConverter(sentenceArray);
  insertIntoHTML(sentence, morseCode);
};

submit.addEventListener('click', formSubmission);