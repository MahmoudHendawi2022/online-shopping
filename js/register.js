// register form
var regFirstName = document.getElementById("regFirstName");
// var regSecondName = document.getElementById("regSecondName");
var regEmail = document.getElementById("regEmail");
var regPassword = document.getElementById("regPassword");
var regConfirmPassword = document.getElementById("confirm-password");
let registrationForm = document.querySelector(".registration-form");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  checkUser()
});

function checkInputs() {
  const regFirstNameValue = regFirstName.value.trim();
  // const regSecondNameValue = regSecondName.value.trim();
  const regEmailValue = regEmail.value.trim();
  const regPasswordValue = regPassword.value.trim();
  const regConfirmPasswordValue = regConfirmPassword.value.trim();

  if (regFirstNameValue === "") {
    setErrorFor(regFirstName, "Username cannot be blank");
  } else {
    setSuccessFor(regFirstName);
    localStorage.setItem("username", regFirstNameValue);
  }

  if (regEmailValue === "") {
    setErrorFor(regEmail, "Email cannot be blank");
  } else if (!isEmail(regEmailValue)) {
    setErrorFor(regEmail, "Not a valid email");
  } else {
    setSuccessFor(regEmail);
    localStorage.setItem("email", regEmailValue);
  }

  if (regPasswordValue === "") {
    setErrorFor(regPassword, "Password cannot be blank");
  } else if (regPasswordValue.length < 8) {
    setErrorFor(regPassword, "Password must not be less 8 digits");
  } else {
    setSuccessFor(regPassword);
    localStorage.setItem("password", regPasswordValue);
  }
  if (regConfirmPasswordValue === "") {
    setErrorFor(regConfirmPassword, "Password cannot be blank");
  } else if (regPasswordValue !== regConfirmPasswordValue) {
    setErrorFor(regConfirmPassword, "Passwords does not match");
  } else if (regConfirmPasswordValue.length < 8) {
    setErrorFor(regConfirmPassword, "Password must not be less 8 digits");
  } else {
    setSuccessFor(regConfirmPassword);
    localStorage.setItem("password2", regConfirmPasswordValue);
  }
 
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "formControl error";
  small.innerText = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "formControl success";
  console.log(formControl);
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function checkUser(){
  if(localStorage.getItem("username") && localStorage.getItem("email")&&localStorage.getItem("password")&&localStorage.getItem("password2")){
    setTimeout(()=>{
      window.location = "../login.html"
    },1500)
  }
}
// /////////////////////////////////////////////////////////////////
