let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

// const decrement = () => {
//   counterValue -= 1;
//   counterEl.textContent = counterValue;
// };

// decrementBtn.addEventListener('click', decrement);

// const increment = () => {
//   counterValue += 1;
//   counterEl.textContent = counterValue;
// };

// incrementBtn.addEventListener('click', increment);

class Counter {
  constructor(selector, initialValue = 0, step = 1) {
    this.wrapper = document.querySelector(selector);
    this.initialValue = initialValue;
    this.step = step;
  }

  render = function () {
    const markup = /*html*/ `
      <button type="button" data-action="decrement">-${this.step}</button>
      <span id="value">${this.initialValue}</span>
      <button type="button" data-action="increment">+${this.step}</button>
    `;

    this.wrapper.innerHTML = markup;

    this.addListeners();
  };

  addListeners() {
    this.wrapper
      .querySelector('[data-action="decrement"]')
      .addEventListener('click', this.decrement.bind(this));
    this.wrapper
      .querySelector('[data-action="increment"]')
      .addEventListener('click', this.increment.bind(this));
  }

  decrement(e) {
    this.initialValue -= this.step;
    this.wrapper.querySelector('#value').textContent = this.initialValue;
  }

  increment(e) {
    this.initialValue += this.step;
    this.wrapper.querySelector('#value').textContent = this.initialValue;
  }
}

const counter = new Counter('#counter', 100, 10);

counter.render();
