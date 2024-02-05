let logEmail = document.getElementById("logEmail");
let logPassword = document.getElementById("logPassword");

let emailLocalStorageValue = localStorage.getItem("email");
let passwordLocalStorageValue = localStorage.getItem("password");
let loginForm = document.querySelector(".login-form");
console.log(emailLocalStorageValue);
console.log(passwordLocalStorageValue);
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  checkUser();
});

function checkInputs() {
  const logEmailValue = logEmail.value.trim();
  const logPasswordValue = logPassword.value.trim();

  if (logEmailValue === "") {
    setErrorFor(logEmail, "Email cannot be blank");
  } else if (!isEmail(logEmailValue)) {
    setErrorFor(logEmail, "Email not Valid");
  }

  if (logPasswordValue === "") {
    setErrorFor(logPassword, "Password cannot be blank");
  } else if (logPasswordValue === passwordLocalStorageValue) {
    setSuccessFor(logPassword);
  }
}

function setErrorFor(input, message) {
  const formLogin = input.parentElement;
  const small = formLogin.querySelector("small");
  formLogin.className = "form-group error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formLogin = input.parentElement;
  formLogin.className = "form-group success";
  console.log(formLogin);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function checkUser() {
  if (
    emailLocalStorageValue === logEmail.value.trim() &&
    passwordLocalStorageValue === logPassword.value.trim()
  ) {
    setTimeout(() => {
      window.location = "../index.html";
    }, 1500);
    console.log("yes");
  }
}
