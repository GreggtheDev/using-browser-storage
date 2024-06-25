// Function to initialize the cart app
function initializeCart() {
    // Check if there's a cart in localStorage
    if (localStorage.getItem('cart') === null) {
      // If not, initialize an empty cart and store it in localStorage
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }