const textInput = document.querySelector('#validation-input');

const checkInputLength = event => {
  event.currentTarget.value.length < textInput.dataset.length
    ? textInput.classList.add('invalid')
    : textInput.classList.add('valid');
};

textInput.addEventListener('blur', checkInputLength);
