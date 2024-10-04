const Form = document.getElementById("form");

const Registerbutton = document.getElementById("Registerbutton");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const tablePeopleList = document.getElementById("PeopleList");
const PeopleList = [];

//onclick event when you click register button
function register(event) {
  event.preventDefault();

  // getting data
  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  //field content validation;

  if (!name) {
    alert("Inform your name!");
    inputName.focus();
    return;
  }
  if (!email) {
    alert("Inform your email!");
    inputEmail.focus();
    return;
  }
  if (!password) {
    alert("Inform your password!");
    inputPassword.focus();
    return;
  }
  //if yes -> check an existent data in PeopleList using foreach & find
  let Foundperson = null;
  for (person of PeopleList) {
    if (person.email === email.toLowercase()) {
      Foundperson = person;
      break;
    }
  }
  //then show this alert
  if (Foundperson) {
    alert("This email has been registered before!");
  }
  //else -> add new data in array PeopleList & add table in html
  PeopleList.push({
    name: name,
    email: email,
    password: password,
  });

  const trPerson = document.createElement("tr");
  const tdName = document.createElement("td");
  tdName.textContent = name;
  const tdEmail = document.createElement("td");
  tdEmail.textContent = email;

  trPerson.appendChild(tdName);
  trPerson.appendChild(tdEmail);
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
