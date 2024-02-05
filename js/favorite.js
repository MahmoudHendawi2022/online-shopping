let usernameLocalStorageValue = localStorage.getItem("username");
let productUser = document.querySelector(".productUser");
if (usernameLocalStorageValue) {
  productUser.innerHTML = ` <a href="index.html" >Hi ${usernameLocalStorageValue}</a>`;
}

let favoriteCartLocal = localStorage.getItem("favoriteItems");
let favoriteBox = document.querySelector(".favoriteBox");
let noFavoriteDom = document.querySelector(".noFavorite");
// let allProductsInPage = localStorage.getItem("productsAll");
////////////////////////////////////////////////////////////////

function showCards(allProducts = []) {
  if (JSON.parse(localStorage.getItem("favoriteItems")).length === 0) {
    noFavoriteDom.innerHTML = "There Is No ItemsFavorite";
  } else {
    noFavoriteDom.innerHTML = "Your Items";
  }
  let products =
    JSON.parse(localStorage.getItem("favoriteItems")) || allProducts;
  let productUI = products
    .map((item) => {
      return `
    <div class="card">
         <div class="cardImage">
           <img src=${item.image} alt="" />
         </div>
         <div class="cardInfo">
            <p>product: ${item.name}</p>
            <p>category: ${item.category}</p>
            <p>price: ${item.price} $</p>
            <p>quantity: ${item.quantity} </p>
            <button class="remove" onclick = "removeItemFromCart(${item.id})">Remove</button>
         </div>
    </div>`;
    })
    .join("");
  favoriteBox.innerHTML = productUI;
}
showCards();

function removeItemFromCart(id) {
  let productInCartFavorite = localStorage.getItem("favoriteItems");
  if (productInCartFavorite) {
    let items = JSON.parse(productInCartFavorite);
    let filterdArrayAfterRemove = items.filter((item) => item.id !== id);
    localStorage.setItem(
      "favoriteItems",
      JSON.stringify(filterdArrayAfterRemove)
    );
    showCards(filterdArrayAfterRemove);
    // console.log(filterdArrayAfterRemove);
    // let choosenItemToRemove = myAllProducts.find((item) => item.id === id);
    let myProducts = JSON.parse(localStorage.getItem("productsAll"));
    
    myProducts.map((item) => {
      if (item.id === id) {
        item.liked = false;
        localStorage.setItem("productsAll", JSON.stringify(myProducts));
      }
    });
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
// logout code
let logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("clear");
  setTimeout(() => {
    window.location = "../index.html";
  }, 1500);
});