// Shared JavaScript across all pages
console.log('EduMart loaded');

// Cart functionality
let cart = [];

function addToCart(productId, productName, price) {
    cart.push({
        id: productId,
        name: productName,
        price: price,
        quantity: 1
    });
    updateCartCount();
    showToast(`${productName} added to cart!`);
}

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = cart.length.toString();
        countElement.classList.toggle('hidden', cart.length === 0);
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    replaceFeatherIcons();
});
