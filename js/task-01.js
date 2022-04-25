const categoriesEl = document.querySelector('#categories');

console.log('Number of categories: ', categoriesEl.children.length)

for (const element of categoriesEl.children) {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelector('ul').children.length);
}