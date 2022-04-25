const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', () => {
    if (nameInputEl.value !== '') {
        nameOutputEl.textContent = nameInputEl.value;
    } else {
        nameOutputEl.textContent = 'Anonymous';
    }   
})