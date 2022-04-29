function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const randomBcgColor = getRandomHexColor();

  document.body.style.backgroundColor = randomBcgColor;
  colorText.textContent = randomBcgColor;
});
