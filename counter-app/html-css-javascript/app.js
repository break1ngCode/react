let count = 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');

incrementButton.addEventListener('click', () => {
  count++;
  counterElement.innerText = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counterElement.innerText = count;
});
