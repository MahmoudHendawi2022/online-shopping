// let menuBar = document.querySelector(".fa-bars");
// menuBar.addEventListener("click", openMenu);
function openMenu() {
  let dropMenu = document.querySelector("ul.userInfo");
  if (dropMenu.innerHTML !== "") {
    if (dropMenu.style.display == "none") {
      dropMenu.style.display = "flex" ;
      dropMenu.style.transition = "0.6s"
    } else {
      dropMenu.style.display = "none"
    }
  }
}
