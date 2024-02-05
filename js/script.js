let usernameLocalStorageValue = localStorage.getItem("username");
let productUser = document.querySelector(".productUser");
if (usernameLocalStorageValue) {
  productUser.innerHTML = ` <a href="index.html" >Hi ${usernameLocalStorageValue}</a>`;
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
///////////////////////////////////////////////////////////////////
const cards = document.querySelector(".cards");
// show allProducts
let = myAllProducts = localStorage.getItem("productsAll")
  ? JSON.parse(localStorage.getItem("productsAll"))
  : products;
allProducts(myAllProducts);

function allProducts(products) {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  products.forEach((product) => {
    cards.innerHTML += `
        <div class="card">
        <i class="favorite-icon fas fa-heart" style = " color : ${
          product.liked === true ? "red" : ""
        }"  onclick = 'addToFavorite(${product.id})'></i>
        <div class="card-img">
          <img src=${product.image} alt="" />
        </div>
        <div class="card-content">
          <a onclick = "itemDetailsId(${
            product.id
          })" class="card-title" title= "CartDetails">${product.name}</a>
          <div class="card-price">$${product.price}</div>
          <div class="card-category">${product.category}</div>
          <div class="card-category">${product.size}</div>
          <button class='add-to-cart-button' onclick = 'addToCart(${
            product.id
          })'>Add to Cart</button>
         
        </div>
        
        </div>
        `;
  });
}
// get itemDetailsId
function itemDetailsId(id) {
  localStorage.setItem("productId", id);
  if (localStorage.getItem("username")) {
    window.location = "../cartDetails.html";
  }else {
    window.location = "../register.html"
  }
}
// search by name and category
function searchByNameAndCategory() {
  var searchDropdown = document.querySelector(".search-dropdown");
  var searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target);
    var searchTerm = searchInput.value.toLowerCase();
    var selectedOption = searchDropdown.value.toLowerCase();

    const filteredItem = products.filter((item) => {
      if (selectedOption === "name") {
        return item.name.toLowerCase().includes(searchTerm);
      } else if (selectedOption === "category") {
        return item.category.toLowerCase().includes(searchTerm);
      }
    });
    allProducts(filteredItem);
  });
}
searchByNameAndCategory();

// add to cart function
let cart = localStorage.getItem("productsSelected")
  ? JSON.parse(localStorage.getItem("productsSelected"))
  : [];
let total = 0;
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let cartContainerProducts = document.querySelector(
      ".cartContainerProducts"
    );
    let cartNumber = document.querySelector(".cartNumber");
    let choosenItem = myAllProducts.find((item) => item.id === id);
    console.log(choosenItem);
    if (choosenItem) {
      const existingCartItem = cart.find((item) => item.id === id);
      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        cart.push(choosenItem); // cart = [...cart, choosenItem]
      }
      cartNumber.style.display = "block";
      cartNumber.innerHTML = cart.length;
      localStorage.setItem("productsSelected", JSON.stringify(cart)); //localStorage
      localStorage.setItem("cartLength", cart.length);
      cartContainerProducts.innerHTML = "";
      cart.forEach((product) => {
        cartContainerProducts.innerHTML += `<div class="itemContainer">
        <span class="item-title">${product.name}</span>
        <div class="quantity-controls">
          <span class="quantity" id="quantity">${product.quantity}</span>
        </div>
    </div>`;
      });
    }
  } else {
    window.location = "../login.html";
  }
}

// add to favorite
let addFavoriteCart = localStorage.getItem("favoriteItems")
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [];
// console.log(addFavoriteCart);
function addToFavorite(id) {
  let choosenItem = myAllProducts.find((item) => item.id === id);
  if (choosenItem) {
    const existingCartItem = addFavoriteCart.find((item) => item.id === id);
    myAllProducts.map((product) => {
      if (product.id === choosenItem.id) {
        if (existingCartItem) {
          let arrayAfterFav = addFavoriteCart.filter(
            (item) => item.id !== existingCartItem.id
          );
          choosenItem.liked = false;
          product.liked = false;
          addFavoriteCart = arrayAfterFav;
          localStorage.setItem(
            "favoriteItems",
            JSON.stringify(addFavoriteCart)
          ); //localStorage favorite
          //////////////////////////////////////
          localStorage.setItem("productsAll", JSON.stringify(myAllProducts)); //localStorage all after fav
          allProducts(myAllProducts);
        } else {
          product.liked = true;
          choosenItem.liked = true;

          addFavoriteCart = [...addFavoriteCart, choosenItem]; // cart = [...cart, choosenItem]
          localStorage.setItem(
            "favoriteItems",
            JSON.stringify(addFavoriteCart)
          ); //localStorage
          //////////////////////////////////
          localStorage.setItem("productsAll", JSON.stringify(myAllProducts)); //localStorage all after fav
          allProducts(myAllProducts);
        }
      }
    });
  }
}

// save cartLength
(function saveDataCartLength() {
  let cartNumber = document.querySelector(".cartNumber");
  cartNumber.style.display = "block";
  let cartLengthFromLocal = JSON.parse(
    localStorage.getItem("productsSelected")
  );
  cartNumber.innerHTML = cartLengthFromLocal.length;
})();

// save cartSelected
function saveCartSelected() {
  let addedProductFromLocal = JSON.parse(
    localStorage.getItem("productsSelected")
  );
  let cartContainerProducts = document.querySelector(".cartContainerProducts");
  addedProductFromLocal.forEach((product) => {
    cartContainerProducts.innerHTML += `<div class="itemContainer">
    <span class="item-title">${product.name}</span>
    <div class="quantity-controls">
      <span class="quantity" id="quantity">${product.quantity}</span>
    </div>
    </div>`;
  });
}
saveCartSelected();

// cart onclick = opencart
let faCartShopping = document.querySelector(".cartIcon");
let cartContainer = document.querySelector(".cartContainer");
let cartContainerProducts = document.querySelector(".cartContainerProducts");
faCartShopping.addEventListener("click", opencart);
function opencart() {
  if (cartContainerProducts != "") {
    if (cartContainer.style.display == "block") {
      cartContainer.style.display = "none";
    } else {
      cartContainer.style.display = "block";
    }
  }
}

function openMenu() {
  let dropMenu = document.querySelector("ul.userInfo");
  if (dropMenu.innerHTML !== "") {
    if (dropMenu.style.display == "none") {
      dropMenu.style.display = "flex";
      dropMenu.style.transition = "0.6s";
    } else {
      dropMenu.style.display = "none";
    }
  }
}
