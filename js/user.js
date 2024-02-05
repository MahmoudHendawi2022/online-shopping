
let userIn = document.querySelector("ul.userIn");
let userOut = document.querySelector("ul.userOut");
if (localStorage.getItem("username")) {
    userOut.style.display = "none";
}else{
    userIn.style.display = "none";
}
