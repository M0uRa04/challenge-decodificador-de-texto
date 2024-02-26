let btnCriptografar = document.getElementById('btn__encript');
let btnDescriptografar = document.getElementById('btn__decript');
let transformedText = document.getElementById('transformed_text');
let btnCopy = document.getElementById('secondary__content__copy__btn');
let textOfCopyBtn = document.getElementById('text__copy');
let secondaryContainer = document.querySelector('.content__secondary__decripted');
let textAreaCharacterArray = [];
let baseEncriptAndDecriptChar = ['a', 'e', 'i', 'o', 'u'];
let baseEncriptAndDecriptWord = ['ai', 'enter', 'imes', 'ober', 'ufat']

function hasEspecialCharacteres(input) {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÌÍÎÏìíîïÒÓÔÕÖØòóôõöøÙÚÛÜùúûü]/;
    let has =  regex.test(input);
    if (has) {
        alert('Desculpe, não é possível inserir caracteres especiais ou letras com acento.')
        return true
    } else {
        return false
    }
}

function isTextAreaEmpty(textArea) {
    let text = document.querySelector(textArea);
    let textValue = text.value;
    if (textValue === '') {
        return true;
    } else {
        false;
    }
}

function getTextOfTextArea(textArea) {
    let text = document.querySelector(textArea);
    let textValue = text.value;
    return textValue;
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

function decript(text) {
    let decryptedText = text;
    for (let i = 0; i < baseEncriptAndDecriptWord.length; i++) {
        decryptedText = removeWordOfString(decryptedText, baseEncriptAndDecriptWord[i]);
    }
    return decryptedText;
}


btnCriptografar.addEventListener('click', function () {
    if ((!isTextAreaEmpty('#user_text')) && (!hasEspecialCharacteres(getTextOfTextArea('#user_text')))) {
        let encripitedText = encripit(getTextOfTextArea('#user_text'));
        secondaryContainer.style.display = "none";
        transformedText.style.display = "flex";
        transformedText.textContent = encripitedText;
        btnCopy.style.display = "flex";
    }

})

btnDescriptografar.addEventListener('click', function () {
    if (!isTextAreaEmpty('#transformed_text')) {
        let decripitedText = decript(getTextOfTextArea('#transformed_text'));
        secondaryContainer.style.display = "none";
        transformedText.style.display = "flex";
        transformedText.textContent = decripitedText;
        btnCopy.style.display = "flex";
    }

})

btnCopy.addEventListener('click', function () {
    let textOfTextAreaSecondaryContent = getTextOfTextArea('#transformed_text');
    navigator.clipboard.writeText(textOfTextAreaSecondaryContent)
        .then(() => {
            textOfCopyBtn.textContent = "Copiado";
            setTimeout(function () {
                textOfCopyBtn.textContent = "Copiar";
            }, 3000);
        })
        .catch(() => {
            console.error('Error at copy text');
        })
})

