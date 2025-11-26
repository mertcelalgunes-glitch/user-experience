class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0f172a;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        .footer-about {
          margin-bottom: 1rem;
          color: #94a3b8;
        }
        .footer-heading {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: white;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #fcd34d;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #1e293b;
          transition: background 0.3s;
        }
        .social-links a:hover {
          background: #3b82f6;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #1e293b;
          color: #94a3b8;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-col">
            <div class="footer-logo">
              <i data-feather="book-open" class="footer-logo-icon"></i>
              EduMart
            </div>
            <p class="footer-about">
              Your one-stop shop for all school and office supplies. Quality products at student-friendly prices.
            </p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="faq.html">FAQ</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3 class="footer-heading">Categories</h3>
            <ul class="footer-links">
              <li><a href="products.html?category=notebooks">Notebooks</a></li>
              <li><a href="products.html?category=pens">Pens & Pencils</a></li>
              <li><a href="products.html?category=art">Art Supplies</a></li>
              <li><a href="products.html?category=tech">Tech Accessories</a></li>
              <li><a href="products.html?category=backpacks">Backpacks</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3 class="footer-heading">Contact Us</h3>
            <ul class="footer-links">
              <li><i data-feather="map-pin"></i> 123 School St, EduCity</li>
              <li><i data-feather="phone"></i> (123) 456-7890</li>
              <li><i data-feather="mail"></i> info@edumart.com</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 EduMart. All rights reserved. <a href="/privacy.html" class="text-blue-300 hover:underline">Privacy Policy</a> | <a href="/terms.html" class="text-blue-300 hover:underline">Terms of Service</a></p>
        </div>
      </footer>
    `;

    // Replace feather icons
    const featherIcons = this.shadowRoot.querySelectorAll('[data-feather]');
    featherIcons.forEach(icon => {
      const svg = feather.icons[icon.getAttribute('data-feather')].toSvg({
        width: 16,
        height: 16
      });
      icon.insertAdjacentHTML('afterend', svg);
      icon.remove();
    });
}
}
customElements.define('custom-footer', CustomFooter);
