/**
 * NOVA ENTERPRISE - Product Details Page Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('pdetail-container')) return;
  initProductDetails();
});

function initProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'prod-001';
  const product = NOVA_DATA.products.find(p => p.id === productId) || NOVA_DATA.products[0];

  // Set document title
  document.title = `${product.name} | NOVA Enterprise Commerce`;

  // Render Core Details
  const breadcrumbName = document.getElementById('pdetail-breadcrumb-name');
  if (breadcrumbName) breadcrumbName.textContent = product.name;

  document.getElementById('pdetail-title').textContent = product.name;
  document.getElementById('pdetail-sku').textContent = `SKU: ${product.sku} • Category: ${product.category}`;
  document.getElementById('pdetail-price').textContent = window.formatCurrency(product.price);
  
  const origPriceEl = document.getElementById('pdetail-orig-price');
  if (product.originalPrice) {
    origPriceEl.textContent = window.formatCurrency(product.originalPrice);
    origPriceEl.style.display = 'inline';
  } else {
    origPriceEl.style.display = 'none';
  }

  document.getElementById('pdetail-shortdesc').textContent = product.shortDesc;
  document.getElementById('pdetail-rating-text').textContent = `${product.rating} (${product.reviewCount} verified enterprise reviews)`;
  document.getElementById('pdetail-stock').textContent = `In Stock: ${product.inStock} units ready for immediate enterprise dispatch`;

  // Main Image & Thumbnails
  const mainImg = document.getElementById('pdetail-main-img');
  mainImg.src = product.image;
  mainImg.alt = product.name;

  const thumbsContainer = document.getElementById('pdetail-thumbs');
  if (thumbsContainer) {
    const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
    thumbsContainer.innerHTML = gallery.map((imgUrl, idx) => `
      <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${product.name} thumbnail ${idx + 1}" />
      </div>
    `).join('');

    thumbsContainer.querySelectorAll('.thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = thumb.getAttribute('data-src');
      });
    });
  }

  // Feature bullets
  const featuresList = document.getElementById('pdetail-features-list');
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `
      <li style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Specifications Table
  const specsTable = document.getElementById('pdetail-specs-tbody');
  if (specsTable && product.specs) {
    specsTable.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <tr>
        <td>${key}</td>
        <td><strong>${val}</strong></td>
      </tr>
    `).join('');
  }

  // Full Description Tab
  const fullDesc = document.getElementById('pdetail-full-description');
  if (fullDesc) {
    fullDesc.textContent = product.description;
  }

  // Quantity Stepper
  const qtyInput = document.getElementById('pdetail-qty');
  const btnMinus = document.getElementById('pdetail-minus');
  const btnPlus = document.getElementById('pdetail-plus');

  if (btnMinus && btnPlus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });

    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val < product.inStock) qtyInput.value = val + 1;
      else showToast(`Maximum available stock reached (${product.inStock} units)`, 'info');
    });
  }

  // Add to Cart
  const btnAddToCart = document.getElementById('pdetail-btn-add-cart');
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const q = parseInt(qtyInput.value) || 1;
      window.store.addToCart(product.id, q);
      showToast(`Added ${q}x ${product.name} to Cart`, 'success');
    });
  }

  // Buy Now
  const btnBuyNow = document.getElementById('pdetail-btn-buy-now');
  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', () => {
      const q = parseInt(qtyInput.value) || 1;
      window.store.addToCart(product.id, q);
      window.location.href = 'checkout.html';
    });
  }

  // Wishlist toggle
  const btnWishlist = document.getElementById('pdetail-btn-wishlist');
  if (btnWishlist) {
    const updateWishBtn = () => {
      const inWish = window.store.isInWishlist(product.id);
      btnWishlist.classList.toggle('active', inWish);
      const svg = btnWishlist.querySelector('svg');
      if (svg) svg.setAttribute('fill', inWish ? 'currentColor' : 'none');
    };
    updateWishBtn();

    btnWishlist.addEventListener('click', () => {
      const added = window.store.toggleWishlist(product.id);
      updateWishBtn();
      showToast(added ? 'Saved to enterprise wishlist' : 'Removed from wishlist', 'info');
    });
  }

  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId)?.classList.add('active');
    });
  });

  // Render Related Products
  renderRelatedProducts(product);
}

function renderRelatedProducts(current) {
  const container = document.getElementById('pdetail-related-grid');
  if (!container) return;

  const related = NOVA_DATA.products
    .filter(p => p.id !== current.id && (p.category === current.category || p.badge))
    .slice(0, 3);

  container.innerHTML = related.map(p => `
    <article class="card card-product">
      <div class="card-product-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="badge badge-primary card-product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="card-product-body">
        <div class="card-product-cat">${p.category}</div>
        <h4 class="card-product-title"><a href="product-details.html?id=${p.id}">${p.name}</a></h4>
        <div class="card-product-footer">
          <span class="card-product-price">${window.formatCurrency(p.price)}</span>
          <a href="product-details.html?id=${p.id}" class="btn btn-secondary btn-sm">View</a>
        </div>
      </div>
    </article>
  `).join('');
}
