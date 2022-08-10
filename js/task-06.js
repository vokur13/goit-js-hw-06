const textInput = document.querySelector('#validation-input');

textInput.addEventListener('focus', onInputClassRemove);
textInput.addEventListener('blur', checkInputLength);

function checkInputLength(event) {
  event.currentTarget.value.length === Number(textInput.dataset.length)
    ? textInput.classList.add('valid')
    : textInput.classList.add('invalid');
}

function onInputClassRemove() {
  textInput.classList.remove('valid');
  textInput.classList.remove('invalid');
}
