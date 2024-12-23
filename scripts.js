// Cart Button Toggle (just for demo)
document.getElementById('cartButton').addEventListener('click', () => {
    alert("Your cart is empty. Start shopping!");
});

// Add to Cart functionality (for demo)
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Added to cart!");
    });
});

// Form validation (for demo)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent. Thank you!");
});
