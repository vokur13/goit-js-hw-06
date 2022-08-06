const textInput = document.querySelector('#validation-input');

const checkInputLegth = event => {
  event.currentTarget.value.length < textInput.dataset.length
    ? textInput.classList.add('invalid')
    : textInput.classList.add('valid');
};

textInput.addEventListener('blur', checkInputLegth);
