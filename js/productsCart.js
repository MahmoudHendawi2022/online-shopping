let usernameLocalStorageValue = localStorage.getItem("username");
let productUser = document.querySelector(".productUser");
if (usernameLocalStorageValue) {
  productUser.innerHTML = ` <a href="index.html" >Hi ${usernameLocalStorageValue}</a>`;
}
let productsInProductsCardBox = document.querySelector(".box");
let noProductsDom = document.querySelector(".noProducts");
////////////////////////////////////////////////////////////////

function showCards(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsSelected")).length === 0) {
    noProductsDom.innerHTML = "There Is No Items";
  }

  let products =
    JSON.parse(localStorage.getItem("productsSelected")) || allProducts;
  let productUI = products
    .map((item) => {
      return `<div class="boxCardProduct">
         <div class="boxCardProductImage">
           <img src=${item.image} alt="" />
         </div>
         <div class="boxCardProductInfo">
           <p>product: ${item.name}</p>
           <p>category: ${item.category}</p>
           <p>price: ${item.price} $</p>
           <p>Description: ${item.desc} </p>
           <p>Size: ${item.size} </p>
           <div class="quantity-controls">
            
             <p class="quantity" id="quantity"> Quantity: ${item.quantity}</p>
             <button class="remove" onclick = "removeItemFromCart(${item.id})">Remove</button>
           </div>
         </div>
       </div>`;
    })
    .join("");
  console.log(productUI);
  productsInProductsCardBox.innerHTML = productUI;
}
showCards();

function removeItemFromCart(id) {
  let productInCart = localStorage.getItem("productsSelected");
  if (productInCart) {
    let items = JSON.parse(productInCart);
    let filterdArrayAfterRemove = items.filter((item) => item.id !== id);
    localStorage.setItem(
      "productsSelected",
      JSON.stringify(filterdArrayAfterRemove)
    );
    showCards(filterdArrayAfterRemove);
    console.log(filterdArrayAfterRemove);
  }
}
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
///////////////////////////////////////////////////////////////

// logout code
let logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("clear");
  setTimeout(() => {
    window.location = "../index.html";
  }, 1500);
});