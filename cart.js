'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
// Table id = "cart"
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    for(var i = document.getElementById("cart").rows.length; i > 0; i--){
        document.getElementById("cart").deleteRow(i-1);
    }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
  // TODONE: Find the table body
  // TODONE: Iterate over the items in the cart
  // TODONE: Create a TR
function showCart() {
  var salesTable = document.getElementById("cart");
  var newRow = document.createElement("tr");
  newRow.setAttribute("id", Cart.name);
  salesTable.appendChild(newRow);

  var salesTotal = document.getElementById(Cart.name);
  var itemName = document.createElement("td");
  itemName.textContent = options.name;
  salesTotal.appendChild(itemName);
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
    document.getElementById("cart").deleteRow(0);
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();