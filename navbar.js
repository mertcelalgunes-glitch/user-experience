class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(30, 64, 175, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        nav:hover {
          background: rgba(30, 64, 175, 0.95);
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
.logo-icon {
          margin-right: 0.5rem;
        }
        ul { 
          display: flex; 
          gap: 1.5rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
          align-items: center;
        }
        a { 
          color: rgba(255,255,255,0.9); 
          text-decoration: none; 
          transition: all 0.3s;
          font-weight: 500;
          display: flex;
          align-items: center;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
        }
        a:hover { 
          color: #fcd34d;
          background: rgba(255,255,255,0.1);
        }
.nav-icon {
          margin-right: 0.25rem;
        }
        .cart-icon {
          position: relative;
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #f59e0b;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
.mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(30, 64, 175, 0.95);
            padding: 1rem;
            gap: 1rem;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
          }
          ul.open {
            display: flex;
          }
          a {
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
          }
          a:hover {
            background: rgba(255,255,255,0.15);
          }
.mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="book-open" class="logo-icon"></i>
          EduMart
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="index.html"><i data-feather="home" class="nav-icon"></i> Home</a></li>
          <li><a href="products.html"><i data-feather="shopping-bag" class="nav-icon"></i> Products</a></li>
          <li><a href="about.html"><i data-feather="info" class="nav-icon"></i> About</a></li>
          <li><a href="contact.html"><i data-feather="mail" class="nav-icon"></i> Contact</a></li>
          <li>
            <a href="cart.html" class="cart-icon">
              <i data-feather="shopping-cart" class="nav-icon"></i>
              <span class="cart-count hidden" id="cart-count">0</span>
            </a>
          </li>
          <li>
            <a href="cart.html" class="flex items-center">
              <i data-feather="shopping-cart" class="nav-icon"></i>
              <span class="cart-count hidden" id="cart-count">0</span>
            </a>
          </li>
          <li>
            <a href="checkout.html" class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium transition duration-300">
              Checkout
            </a>
          </li>
</ul>
      </nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
      });
    }

    // Replace feather icons
    const featherIcons = this.shadowRoot.querySelectorAll('[data-feather]');
    featherIcons.forEach(icon => {
      const svg = feather.icons[icon.getAttribute('data-feather')].toSvg({
        width: 20,
        height: 20
      });
      icon.insertAdjacentHTML('afterend', svg);
      icon.remove();
});
  }
}
customElements.define('custom-navbar', CustomNavbar);
