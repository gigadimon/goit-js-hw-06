const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email == '' || password == '') {
    return alert('Все поля должны быть заполнены!');
  }

  const formObject = {
    email,
    password,
  };

  console.log(formObject);
  event.currentTarget.reset();
});
