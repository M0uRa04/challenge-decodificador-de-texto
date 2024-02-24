let btnCriptografar = document.getElementById('btn__encript');
let btnDescriptografar = document.getElementById('btn__decript');
let transformedText = document.getElementById('transformed_text');
let btnCopy = document.getElementById('secondary__content__copy__btn');
let secondaryContainer = document.querySelector('.content__secondary__decripted');
let textAreaCharacterArray = [];
let baseEncriptAndDecriptChar = ['a', 'e', 'i', 'o', 'u'];
let baseEncriptAndDecriptWord = ['ai', 'enter', 'imes', 'ober', 'ufat']

function getTextOfTextArea(textArea) {
    let text = document.querySelector(textArea);
    let textValue = text.value;
    return textValue;
}

function removeWordOfString(phrase, word) {
    let index = phrase.indexOf(word);
    const wordLength = word.length;
    while (index !== -1) {
        const firstLetterIndex = index;
        phrase = phrase.slice(0, firstLetterIndex + 1) + phrase.slice(firstLetterIndex + wordLength);
        index = phrase.indexOf(word, firstLetterIndex + 1);
    }
    return phrase;
}

function encripit(getTextOfTextArea) {
    textAreaCharacterArray = getTextOfTextArea.split('');
    for (let i = 0; i < textAreaCharacterArray.length; i++) {
        for (let j = 0; j < baseEncriptAndDecriptChar.length; j++) {
            if (textAreaCharacterArray[i] === baseEncriptAndDecriptChar[j]) {
                textAreaCharacterArray[i] = baseEncriptAndDecriptWord[j];
                break;
            }
        }
    }
    return textAreaCharacterArray.join('');
}

function decript(text) {
    let decripitedText = text;
    for (let i = 0; i < baseEncriptAndDecriptWord.length; i++) {
        decripitedText = removeWordOfString(decripitedText, baseEncriptAndDecriptWord[i]);
    }
    return decripitedText;
}




btnCriptografar.addEventListener('click', function () {
    let encripitedText = encripit(getTextOfTextArea('.textarea__primary__content'));
    secondaryContainer.style.display = "none";
    transformedText.style.display = "flex";
    transformedText.textContent = encripitedText;
    btnCopy.style.display = "flex";
})

btnDescriptografar.addEventListener('click', function () {
    let decripitedText = decript(getTextOfTextArea('.textarea__primary__content'));
    secondaryContainer.style.display = "none";
    transformedText.style.display = "flex";
    transformedText.textContent = decripitedText;  
    btnCopy.style.display = "flex";
})


