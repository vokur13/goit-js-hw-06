function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');

const refs = {
  inputEl: controlsEl.firstElementChild,
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

refs.inputEl.addEventListener('input', onNumberGet);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onNumberGet(event) {
  return event.currentTarget.value;
}

function createBoxes() {
  let boxHeight = 20;
  let boxWidth = 20;
  for (let index = 0; index < refs.inputEl.value; index += 1) {
    const box = document.createElement('div');
    boxHeight += 10;
    boxWidth += 10;
    box.style.height = `${boxHeight}px`;
    box.style.width = `${boxWidth}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.append(box);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = ' ';
}
