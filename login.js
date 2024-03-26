const loginForm = document.querySelector(".login");
const loginBtn = document.querySelector(".logInBtn");
const profilePage = document.querySelector(".profilePage");
const logoutBtn = document.querySelector(".logOutBtn");

const username = document.getElementById("username");
const welcomeMessage = document.getElementById("welcomeMessage");
const skillList = document.getElementById("skillList");
let skills = [];

function logIn() {
  loginForm.style.display = "none";
  loginBtn.style.display = "none";
  profilePage.style.display = "block";
  logoutBtn.style.display = "block";

  // Display welcome message
  welcomeMessage.innerHTML = `Welcome ${username.value}!`;

  // Get skills
  const skillCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][name="skills"]:checked',
  );
  for (const checkbox of skillCheckboxes) {
    skills.push(checkbox.value);
  }
  for (const skill of skills) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillList.appendChild(listItem);
  }

  // Get favorite fruit
  const favoriteFruitValue = document.getElementById("fruit").value;
  const favoriteFruit = document.querySelector(".fruit");
  favoriteFruit.innerHTML = `favorite fruit is ${favoriteFruitValue}`;

  //get bio and add
  const bioValue = document.getElementById("bio").value;
  const bio = document.querySelector(".bio");
  bio.innerHTML = `about me: ${bioValue}`;

  // Get text box content
  const textBoxContent = document.querySelector("textarea").value;
}
function logOut() {
  loginForm.style.display = "block";
  loginBtn.style.display = "block";
  profilePage.style.display = "none";
  logoutBtn.style.display = "none";
}
