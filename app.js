"use strict";

// Variables

const toggleButton = document.querySelector(".toggle-button");
const buttonDelete = document.querySelector(".btn-delete");
const buttonAddToCart = document.querySelector(".btn-add-to-cart");
const navbarLinks = document.querySelector(".navbar-links");
const cart = document.querySelector(".cart");
const cartItemsFull = document.querySelector(".cart-items-full");
const cartItemsEmpty = document.querySelector(".cart-items-empty");
const cartItems = document.querySelector(".cart-items");
const priceTag = document.querySelector(".price-tag");
const numberOfItems = document.querySelector(".number-of-items");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const imgMain = document.querySelector(".img-main");
const imgThumbnail = document.querySelectorAll(".img");

// Changing main image and adding style to the selected one

// Could use but not familiar yet

// for (const img of imgThumbnail) {
//   img.addEventListener("click", () => {
//     if (lastImgClicked) {
//       lastImgClicked.classList.remove("pressed");
//     }
//     img.classList.add("pressed");
//     lastImgClicked = img;

//     imgMain.src = `images/image-product-${i + 1}.jpg`;
//   });
// }

let lastImgClicked;

for (let i = 0; i < imgThumbnail.length; i++) {
  imgThumbnail[i].addEventListener("click", () => {
    if (lastImgClicked) {
      lastImgClicked.classList.remove("pressed");
    }
    imgThumbnail[i].classList.add("pressed");
    lastImgClicked = imgThumbnail[i];

    imgMain.setAttribute("src", `images/image-product-${i + 1}.jpg`);
  });
}

// Items added or removed (before adding them to cart)

plus.addEventListener("click", () => {
  numberOfItems.textContent = Number(numberOfItems.innerHTML) + 1;
});

minus.addEventListener("click", () => {
  if (Number(numberOfItems.innerHTML < 1)) {
    numberOfItems.textContent;
  } else {
    numberOfItems.textContent = Number(numberOfItems.innerHTML) - 1;
  }
});

// Add items to cart

buttonAddToCart.addEventListener("click", (items) => {
  items = numberOfItems.textContent;
  cartItems.textContent = items;
  priceTag.textContent = `$125.00 x ${items} $${125 * items}.00`;
});

// Cart display based on inventory

cart.addEventListener("click", () => {
  if (cartItems.textContent > 0) {
    cartItemsFull.classList.toggle("active");
  } else {
    cartItemsEmpty.classList.toggle("active");
  }
});

// Cart closing with ESCAPE

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cartItemsFull.classList.remove("active");
    cartItemsEmpty.classList.remove("active");
  }
});

// Deleting items with trashcan icon

buttonDelete.addEventListener("click", function () {
  cartItems.textContent = 0;
  numberOfItems.textContent = 0;
  cartItemsFull.classList.remove("active");
  cartItemsEmpty.classList.toggle("active");
});

// Hamburger menu at mobile size

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});
