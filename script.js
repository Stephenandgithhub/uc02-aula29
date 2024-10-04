const Form = document.getElementById("form");

const Registerbutton = document.getElementById("Registerbutton");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

function register(event) {
  event.preventDefault();

  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  console.log({
    name: name,
    email: email,
    password: password,
  });
}

const Anonregister = (event) => {
  console.log(event);
};
Registerbutton.addEventListener("click", register);
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
