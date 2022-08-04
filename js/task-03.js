const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
console.log(listEl);

const elements = images
  .map(element => {
    `<li class="item">${element}</li>`;
  })
  .join('');

console.log(elements);

listEl.insertAdjacentHTML('afterbegin', elements);

// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// const elements = images.map(element => {
//   const itemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
// });

//

// const imageEl = document.createElement('img');
// imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
// imageEl.alt = 'valais-alpine-mountains-glacier';
// imageEl.width = 320;
// console.log(imageEl);

// const elements = colorPickerOptions.map(element => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = element.label;
//   buttonEl.style.backgroundColor = element.color;
//   return buttonEl;
// });
