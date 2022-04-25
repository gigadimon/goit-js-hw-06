function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');
const boxesContainerRef = document.querySelector('#boxes');

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  const boxesArray = [];

  for (let i = 1; i <= Number(amount); i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${boxWidth}px`;
    newBox.style.height = `${boxHeight}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newBox)
    boxWidth += 10;
    boxHeight += 10;
  }
  boxesContainerRef.append(...boxesArray);
  inputRef.value = ''
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  inputRef.value = ''
}

inputRef.addEventListener('input', () => {});
createButtonRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyButtonRef.addEventListener('click', () => destroyBoxes());












