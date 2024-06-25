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

  // Function to display the cart
  function displayCart() {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Log the cart contents to the console
    console.log(cart);
  }

  // Event listeners
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
    // Get the values from the input fields
    let itemName = document.getElementById('itemName').value;
    let itemPrice = document.getElementById('itemPrice').value;
    // Create an item object
    let item = {
      id: Date.now(), // Use the current timestamp as a unique id
      name: itemName,
      price: itemPrice
    };
    // Add the item to the cart
    addItem(item);
  });