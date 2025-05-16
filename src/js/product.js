<<<<<<< HEAD
import { getParam, } from "./utils.mjs";
=======
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
>>>>>>> origin/main
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init()
console.log(product)


<<<<<<< HEAD
=======
function addProductToCart(product) {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

>>>>>>> origin/main
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
