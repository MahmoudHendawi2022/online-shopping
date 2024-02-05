let productsAllFromLocal = JSON.parse(localStorage.getItem("productsAll"));
let productId = localStorage.getItem("productId");
let itemDetailsDom = document.querySelector(".itemDetails");

let itemDetails = productsAllFromLocal.find((item) => item.id == productId);
itemDetailsDom.innerHTML = `
<img src=${itemDetails.image} alt="" />
<p class="size">mediam</p>
<p class="price">${itemDetails.price}$</p>

`;
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
// logout code
let logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("clear");
  setTimeout(() => {
    window.location = "../index.html";
  }, 1500);
});