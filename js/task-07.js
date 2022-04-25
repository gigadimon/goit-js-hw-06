const rageInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rageInputEl.addEventListener('input', () => {
    textEl.style.fontSize = `${rageInputEl.value}px`;
})