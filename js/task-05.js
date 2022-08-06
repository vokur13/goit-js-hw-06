const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  textOutput.textContent = event.currentTarget.value;

  console.log('event: ', event);
  console.log('event type: ', event.type);
  console.log('currentTarget: ', event.currentTarget);
});
