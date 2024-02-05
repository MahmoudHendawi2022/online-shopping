// variables
let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productPrice = document.getElementById("productPrice");
let productDesc = document.getElementById("productDesc");
let productSize = document.getElementById("productSize");
// let productUrlImage = document.getElementById("productImage");
let productForm = document.getElementById("productForm");
let myProducts = products;
let productSizeValue;
let imageUrl;
var productImage = document.getElementById("productImage"); // Get the selected file
//   productImage.addEventListener("change", (e)=>{
// e.preventDefault();
// console.log(e.target.files[0].type)

//   })

productSize.addEventListener("change", getProductSizeValue);
productImage.addEventListener("change", checkFile);
productForm.addEventListener("submit", createProduct);

// getProductSizeValue function
function getProductSizeValue(e) {
  productSizeValue = e.target.value;

  // createProduct function
}
function createProduct(e) {
  e.preventDefault();
  let allProducts = localStorage.getItem("productsAll")
    ? JSON.parse(localStorage.getItem("productsAll"))
    : myProducts;
  let nameValue = productName.value;
  let PriceValue = productPrice.value;
  let SizeValue = productSize.value;
  let DescValue = productDesc.value;
  let catgoryValue = productCategory.value;
  let imageValue = productImage.files[0];

  if (
    nameValue &&
    PriceValue &&
    SizeValue &&
    imageValue &&
    DescValue &&
    catgoryValue
  ) {
    let obj = {
      id: allProducts.length + 1,
      name: nameValue,
      price: PriceValue,
      category: catgoryValue,
      image: imageUrl,
      size: SizeValue,
      quantity: 1,
    };
    let newProducts = [...allProducts, obj];
    console.log(newProducts);
    localStorage.setItem("productsAll", JSON.stringify(newProducts));
    productName.value = "";
    productPrice.value = "";
    productSize.value = "";
    productDesc.value = "";
    productCategory.value = "";
    imageValue = "";
    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("Fill Data");
  }
}

function checkFile() {
  let imageValue = this.files[0];
  // Check if a file is selected
  if (!imageValue) {
    alert("Please select an image.");
  }
  // Check if the selected file is an image
  if (!imageValue.type.startsWith("image")) {
    alert("Please select an image file.");
  }

  // Check file size (in bytes)
  var maxSize = 2 * 1024 * 1024; // 2 MB
  if (imageValue.size > maxSize) {
    alert("Image size exceeds 2 MB limit.");
  }
  getImageUrl(imageValue);
}

// getImageUrl function
function getImageUrl(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    imageUrl = reader.result;
  };
  reader.onerror = function () {
    alert("no file ya malem");
  };
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