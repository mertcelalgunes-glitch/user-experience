
// Shared JavaScript across all pages
console.log('EduMart loaded');

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, price) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${productName} added to cart!`);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const countElements = document.querySelectorAll('#cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    countElements.forEach(countElement => {
        if (countElement) {
            countElement.textContent = totalItems.toString();
            countElement.classList.toggle('hidden', totalItems === 0);
        }
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Product filtering functionality
function setupFilters() {
    const sortSelect = document.querySelector('select:nth-of-type(1)');
    const categorySelect = document.querySelector('select:nth-of-type(2)');
    
    if (sortSelect && categorySelect) {
        sortSelect.addEventListener('change', filterProducts);
        categorySelect.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const sortBy = document.querySelector('select:nth-of-type(1)').value;
    const category = document.querySelector('select:nth-of-type(2)').value;
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.dataset.category || 'all';
        const cardPrice = parseFloat(card.dataset.price);
        
        // Category filter
        if (category !== 'All Categories' && !cardCategory.includes(category.toLowerCase())) {
            card.style.display = 'none';
            return;
        }
        
        card.style.display = 'block';
    });
    
    // Sort products
    const productContainer = document.querySelector('.grid');
    if (productContainer) {
        const sortedProducts = Array.from(productCards).sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            
            if (sortBy.includes('Low to High')) return priceA - priceB;
            if (sortBy.includes('High to Low')) return priceB - priceA;
            return 0; // Default or Popular sort
        });
        
        sortedProducts.forEach(card => productContainer.appendChild(card));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupFilters();
    
    // Replace feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
