// Function to initialize the cart app
function initializeCart() {
    // Check if there's a cart in localStorage
    if (localStorage.getItem('cart') === null) {
      // If not, initialize an empty cart and store it in localStorage
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  // Function to add an item to the cart
  function addItem(item) {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Add the item to the cart
    cart.push(item);
    // Store the updated cart back into localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Function to remove an item from the cart
  function removeItem(itemId) {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Remove the item with the given id from the cart
    cart = cart.filter(item => item.id !== itemId);
    // Store the updated cart back into localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }