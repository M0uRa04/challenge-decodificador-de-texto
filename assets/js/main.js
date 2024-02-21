let btnCriptografar = document.getElementById('btn__encript');
let transformedText = document.getElementById('transformed_text');
let btnCopy = document.getElementById('secondary__content__copy__btn');
let secondaryContainer = document.querySelector('.content__secondary__decripted');
let baseEncriptAndDecriptChar = ['a', 'e', 'i', 'o', 'u'];
let baseEncriptAndDecriptWord = ['ai', 'enter', 'imes', 'ober', 'ufat']

function getTextOfTextArea(textArea) {
    let text = document.querySelector(textArea);
    let textValue = text.value;
    return textValue;
}

function encripit (getTextOfTextArea) {
    let textAreaCharacterArray = getTextOfTextArea().split('');
    for (let i = 0; i < textAreaCharacterArray.length; i++) {
        for (let j = 0; j < baseEncriptAndDecriptChar.length; j++) {
            if(textAreaCharacterArray[i] == baseEncriptAndDecriptChar[j]) {
                textAreaCharacterArray[i] = baseEncriptAndDecriptWord[j];
                break;
            }           
        }     
    }
    return textAreaCharacterArray.join('');
}


btnCriptografar.addEventListener('click', function(){
    //Pegar o texto
    let encripitedText = encripit(getTextOfTextArea('.textarea__primary__content'));
    //criptografar o texto
    /**
     * Pegar o textValue e transformar em minusculas
     * Transformar em um array de caracteres
     * Verificar se nesse array tem as letras a, e , i , o , u
     * Se tiver substituir pela criptografia correspondente
     * concluir a criptografia
     */

    //transferir o texto criptografado para o outro lado da tela.
    secondaryContainer.style.display="none";
    transformedText.style.display="flex";
    transformedText.textContent = encripitedText;
    btnCopy.style.display="flex";
    

})


