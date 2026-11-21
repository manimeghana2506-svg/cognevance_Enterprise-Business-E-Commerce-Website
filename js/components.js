/**
 * NOVA ENTERPRISE - UI Components & Interactive Behaviors
 * Toasts, Drawers, Quick View Modal, Search Modal, Theme Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  injectDrawersAndModals();
  initCartDrawer();
  initWishlistDrawer();
  initSearchModal();
  initQuickViewModal();
  updateBadges();

  // Listen to store updates
  window.store.subscribe(() => {
    updateBadges();
    renderCartDrawerItems();
    renderWishlistDrawerItems();
  });
});

/* Theme Initialization */
function initTheme() {
  const currentTheme = window.store.theme || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = window.store.toggleTheme();
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  });
}

/* Navbar Scroll & Mobile Menu */
function initNavbar() {
  const navbar = document.querySelector('.nova-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const overlay = document.querySelector('.nav-backdrop');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeMobile = () => {
      mobileDrawer.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeMobile);
    if (overlay) overlay.addEventListener('click', closeMobile);
  }
}

/* Update Cart and Wishlist Badge Counters */
function updateBadges() {
  const cartBadges = document.querySelectorAll('.badge-cart-count');
  const cartCount = window.store.getCartCount();
  cartBadges.forEach(badge => {
    badge.textContent = cartCount;
    badge.style.display = cartCount > 0 ? 'inline-flex' : 'none';
  });

  const wishlistBadges = document.querySelectorAll('.badge-wishlist-count');
  const wishCount = window.store.getWishlistCount();
  wishlistBadges.forEach(badge => {
    badge.textContent = wishCount;
    badge.style.display = wishCount > 0 ? 'inline-flex' : 'none';
  });
}

/* Inject Global Drawers and Modals into DOM if not present */
function injectDrawersAndModals() {
  if (document.getElementById('nova-global-injected')) return;

  const container = document.createElement('div');
  container.id = 'nova-global-injected';
  container.innerHTML = `
    <!-- Backdrop Overlay -->
    <div id="nova-backdrop" class="nova-backdrop"></div>

    <!-- Toast Notification Container -->
    <div id="nova-toast-container" class="nova-toast-container" aria-live="polite"></div>

    <!-- Cart Slide-out Drawer -->
    <aside id="nova-cart-drawer" class="nova-drawer nova-drawer-right" aria-label="Shopping Cart Drawer">
      <div class="drawer-header">
        <div class="drawer-title-group">
          <h3>Enterprise Cart</h3>
          <span class="badge badge-primary badge-cart-count">0</span>
        </div>
        <button type="button" class="btn-close-drawer" aria-label="Close cart">&times;</button>
      </div>
      <div class="drawer-body" id="cart-drawer-body">
        <!-- Rendered items go here -->
      </div>
      <div class="drawer-footer" id="cart-drawer-footer">
        <div class="cart-promo-section">
          <div class="promo-input-group">
            <input type="text" id="cart-promo-input" placeholder="Promo code (Try SAVE20)" class="form-input form-input-sm" />
            <button type="button" id="cart-promo-btn" class="btn btn-secondary btn-sm">Apply</button>
          </div>
          <div id="cart-promo-msg" class="promo-feedback"></div>
        </div>
        <div class="cart-summary-breakdown">
          <div class="summary-line">
            <span>Subtotal:</span>
            <span id="cart-drawer-subtotal">$0.00</span>
          </div>
          <div class="summary-line text-success" id="cart-drawer-discount-line" style="display:none;">
            <span>Discount:</span>
            <span id="cart-drawer-discount">-$0.00</span>
          </div>
          <div class="summary-line">
            <span>Freight / Shipping:</span>
            <span id="cart-drawer-shipping">$0.00</span>
          </div>
          <div class="summary-line font-bold summary-total">
            <span>Estimated Total:</span>
            <span id="cart-drawer-total">$0.00</span>
          </div>
        </div>
        <div class="drawer-actions">
          <a href="checkout.html" class="btn btn-primary btn-block btn-checkout">
            Proceed to Checkout
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button type="button" class="btn btn-ghost btn-block btn-sm" id="btn-clear-cart">Clear Cart</button>
        </div>
      </div>
    </aside>

    <!-- Wishlist Slide-out Drawer -->
    <aside id="nova-wishlist-drawer" class="nova-drawer nova-drawer-right" aria-label="Wishlist Drawer">
      <div class="drawer-header">
        <div class="drawer-title-group">
          <h3>Saved Enterprise Items</h3>
          <span class="badge badge-secondary badge-wishlist-count">0</span>
        </div>
        <button type="button" class="btn-close-drawer" aria-label="Close wishlist">&times;</button>
      </div>
      <div class="drawer-body" id="wishlist-drawer-body">
        <!-- Rendered items go here -->
      </div>
    </aside>

    <!-- Global Search Modal -->
    <div id="nova-search-modal" class="nova-modal search-modal" role="dialog" aria-modal="true" aria-label="Product Search">
      <div class="modal-dialog modal-search-dialog">
        <div class="modal-content">
          <div class="search-modal-header">
            <svg class="search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="search" id="global-search-input" placeholder="Search servers, workstations, cybersecurity, IoT..." autofocus autocomplete="off" />
            <button type="button" class="btn-close-modal" aria-label="Close search">&times;</button>
          </div>
          <div class="search-modal-body" id="global-search-results">
            <div class="search-popular-tags">
              <span class="text-muted">Popular:</span>
              <button class="search-tag" data-tag="AI Server">AI Server</button>
              <button class="search-tag" data-tag="Firewall">Firewall</button>
              <button class="search-tag" data-tag="OLED Monitor">OLED Monitor</button>
              <button class="search-tag" data-tag="Biometric">Biometric</button>
            </div>
            <div class="search-results-list" id="search-results-container"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick View Product Modal -->
    <div id="nova-quickview-modal" class="nova-modal" role="dialog" aria-modal="true" aria-label="Quick View">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <button type="button" class="btn-close-modal" aria-label="Close modal">&times;</button>
          <div class="modal-body" id="quickview-content">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);
}

/* Toast Notifications */
window.showToast = function(message, type = 'info', duration = 3500) {
  const container = document.getElementById('nova-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `nova-toast nova-toast-${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  } else {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-message">${message}</span>
    <button type="button" class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  const removeToast = () => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  };

  const timer = setTimeout(removeToast, duration);

  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(timer);
    removeToast();
  });
};

/* Cart Drawer Logic */
function initCartDrawer() {
  const cartTriggers = document.querySelectorAll('.btn-cart-trigger');
  const cartDrawer = document.getElementById('nova-cart-drawer');
  const backdrop = document.getElementById('nova-backdrop');
  const closeBtn = cartDrawer?.querySelector('.btn-close-drawer');
  const clearBtn = document.getElementById('btn-clear-cart');
  const promoBtn = document.getElementById('cart-promo-btn');
  const promoInput = document.getElementById('cart-promo-input');

  const openDrawer = () => {
    cartDrawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartDrawerItems();
  };

  const closeDrawer = () => {
    cartDrawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  cartTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      window.store.clearCart();
      showToast('Shopping cart cleared', 'info');
    });
  }

  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const res = window.store.applyPromo(promoInput.value);
      const msgEl = document.getElementById('cart-promo-msg');
      if (res.success) {
        msgEl.className = 'promo-feedback text-success';
        msgEl.textContent = res.message;
        showToast(res.message, 'success');
      } else {
        msgEl.className = 'promo-feedback text-error';
        msgEl.textContent = res.message;
        showToast(res.message, 'error');
      }
      renderCartDrawerItems();
    });
  }
}

function renderCartDrawerItems() {
  const body = document.getElementById('cart-drawer-body');
  const footer = document.getElementById('cart-drawer-footer');
  if (!body) return;

  const cart = window.store.cart;
  if (!cart || cart.length === 0) {
    body.innerHTML = `
      <div class="empty-state">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Your cart is empty</h4>
        <p class="text-muted">Explore our enterprise servers, workstations, and cybersecurity solutions.</p>
        <a href="shop.html" class="btn btn-secondary btn-sm">Explore Shop</a>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  let html = '<div class="cart-items-list">';
  cart.forEach(item => {
    html += `
      <div class="cart-item-row" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
        <div class="cart-item-details">
          <div class="cart-item-meta">
            <span class="cart-item-cat">${item.category}</span>
            <button class="btn-remove-item" data-id="${item.id}" title="Remove item">&times;</button>
          </div>
          <h5 class="cart-item-name"><a href="product-details.html?id=${item.id}">${item.name}</a></h5>
          <div class="cart-item-price">${window.formatCurrency(item.price)}</div>
          <div class="cart-item-ctrls">
            <div class="qty-stepper qty-stepper-sm">
              <button class="btn-qty-minus" data-id="${item.id}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="btn-qty-plus" data-id="${item.id}">+</button>
            </div>
            <span class="cart-line-total">${window.formatCurrency(item.price * item.quantity)}</span>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  body.innerHTML = html;

  // Bind cart item actions
  body.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => i.id === id);
      if (item) window.store.updateQuantity(id, item.quantity - 1);
    });
  });

  body.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => i.id === id);
      if (item) window.store.updateQuantity(id, item.quantity + 1);
    });
  });

  body.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      window.store.removeFromCart(id);
      showToast('Item removed from cart', 'info');
    });
  });

  // Update summary totals
  const totals = window.store.getCartTotals();
  document.getElementById('cart-drawer-subtotal').textContent = window.formatCurrency(totals.subtotal);
  document.getElementById('cart-drawer-shipping').textContent = totals.shipping === 0 ? 'FREE (Freight)' : window.formatCurrency(totals.shipping);
  document.getElementById('cart-drawer-total').textContent = window.formatCurrency(totals.total);

  const discountLine = document.getElementById('cart-drawer-discount-line');
  if (totals.discountAmount > 0) {
    discountLine.style.display = 'flex';
    document.getElementById('cart-drawer-discount').textContent = `-${window.formatCurrency(totals.discountAmount)} (${totals.promoCode})`;
  } else {
    discountLine.style.display = 'none';
  }
}

/* Wishlist Drawer Logic */
function initWishlistDrawer() {
  const triggers = document.querySelectorAll('.btn-wishlist-trigger');
  const drawer = document.getElementById('nova-wishlist-drawer');
  const backdrop = document.getElementById('nova-backdrop');
  const closeBtn = drawer?.querySelector('.btn-close-drawer');

  const openDrawer = () => {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderWishlistDrawerItems();
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggers.forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
}

function renderWishlistDrawerItems() {
  const body = document.getElementById('wishlist-drawer-body');
  if (!body) return;

  const wishlistIds = window.store.wishlist;
  if (!wishlistIds || wishlistIds.length === 0) {
    body.innerHTML = `
      <div class="empty-state">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <h4>No saved items</h4>
        <p class="text-muted">Save high-value enterprise assets here to review with your procurement team later.</p>
        <a href="shop.html" class="btn btn-secondary btn-sm">Browse Catalog</a>
      </div>
    `;
    return;
  }

  const items = NOVA_DATA.products.filter(p => wishlistIds.includes(p.id));
  let html = '<div class="wishlist-items-list">';
  items.forEach(item => {
    html += `
      <div class="wishlist-item-row" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="wishlist-item-thumb" />
        <div class="wishlist-item-details">
          <h5><a href="product-details.html?id=${item.id}">${item.name}</a></h5>
          <span class="wishlist-item-price">${window.formatCurrency(item.price)}</span>
          <div class="wishlist-item-actions">
            <button class="btn btn-primary btn-xs btn-wishlist-to-cart" data-id="${item.id}">Add to Cart</button>
            <button class="btn btn-ghost btn-xs btn-remove-wishlist" data-id="${item.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  body.innerHTML = html;

  body.querySelectorAll('.btn-wishlist-to-cart').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.getAttribute('data-id');
      window.store.addToCart(id, 1);
      window.store.toggleWishlist(id);
      showToast('Item transferred to Cart', 'success');
    });
  });

  body.querySelectorAll('.btn-remove-wishlist').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.getAttribute('data-id');
      window.store.toggleWishlist(id);
      showToast('Removed from wishlist', 'info');
    });
  });
}

/* Global Search Modal */
function initSearchModal() {
  const triggers = document.querySelectorAll('.btn-search-trigger');
  const modal = document.getElementById('nova-search-modal');
  const closeBtn = modal?.querySelector('.btn-close-modal');
  const searchInput = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-container');
  const popularTags = modal?.querySelectorAll('.search-tag');

  const openSearch = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 100);
  };

  const closeSearch = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggers.forEach(t => t.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  // Keyboard shortcut Ctrl+K or Cmd+K
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      modal.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  popularTags?.forEach(tag => {
    tag.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = tag.getAttribute('data-tag');
        performSearch(searchInput.value);
      }
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  function performSearch(query) {
    const q = (query || '').trim().toLowerCase();
    if (!resultsContainer) return;

    if (!q) {
      resultsContainer.innerHTML = '';
      return;
    }

    const matches = NOVA_DATA.products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty">
          <p>No products found matching "<strong>${query}</strong>".</p>
          <small class="text-muted">Try searching by category (Cloud, Security, Workstation) or model SKU.</small>
        </div>
      `;
      return;
    }

    let html = `<div class="search-results-grid">`;
    matches.forEach(item => {
      html += `
        <a href="product-details.html?id=${item.id}" class="search-result-item">
          <img src="${item.image}" alt="${item.name}" />
          <div class="search-result-info">
            <span class="search-result-cat">${item.category} • SKU: ${item.sku}</span>
            <div class="search-result-title">${item.name}</div>
            <div class="search-result-price">${window.formatCurrency(item.price)}</div>
          </div>
        </a>
      `;
    });
    html += `</div>`;
    resultsContainer.innerHTML = html;
  }
}

/* Quick View Modal Logic */
function initQuickViewModal() {
  const modal = document.getElementById('nova-quickview-modal');
  const closeBtn = modal?.querySelector('.btn-close-modal');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.openQuickView = (productId) => {
    const product = NOVA_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const content = document.getElementById('quickview-content');
    content.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-media">
          <img src="${product.image}" alt="${product.name}" class="quickview-img" />
          <div class="quickview-badge">${product.badge || product.category}</div>
        </div>
        <div class="quickview-info">
          <div class="quickview-cat">${product.category} • SKU: ${product.sku}</div>
          <h2 class="quickview-title">${product.name}</h2>
          <div class="quickview-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-text">${product.rating} (${product.reviewCount} enterprise reviews)</span>
          </div>
          <div class="quickview-price-wrap">
            <span class="quickview-price">${window.formatCurrency(product.price)}</span>
            ${product.originalPrice ? `<span class="quickview-orig-price">${window.formatCurrency(product.originalPrice)}</span>` : ''}
          </div>
          <p class="quickview-desc">${product.shortDesc}</p>
          <ul class="quickview-features">
            ${product.features.slice(0, 4).map(f => `<li>✓ ${f}</li>`).join('')}
          </ul>
          <div class="quickview-stock">
            <span class="stock-pill stock-in">In Stock: ${product.inStock} units available for instant deployment</span>
          </div>
          <div class="quickview-actions">
            <div class="qty-stepper" id="qv-qty-stepper">
              <button type="button" class="btn-qty" id="qv-minus">-</button>
              <input type="number" id="qv-qty-input" value="1" min="1" max="${product.inStock}" readonly />
              <button type="button" class="btn-qty" id="qv-plus">+</button>
            </div>
            <button type="button" class="btn btn-primary btn-add-cart-qv" id="qv-btn-add">Add to Cart</button>
            <a href="product-details.html?id=${product.id}" class="btn btn-outline">Full Details</a>
          </div>
        </div>
      </div>
    `;

    // Hook stepper
    const qtyInput = document.getElementById('qv-qty-input');
    document.getElementById('qv-minus').addEventListener('click', () => {
      let v = parseInt(qtyInput.value) || 1;
      if (v > 1) qtyInput.value = v - 1;
    });
    document.getElementById('qv-plus').addEventListener('click', () => {
      let v = parseInt(qtyInput.value) || 1;
      if (v < product.inStock) qtyInput.value = v + 1;
    });

    document.getElementById('qv-btn-add').addEventListener('click', () => {
      const q = parseInt(qtyInput.value) || 1;
      window.store.addToCart(product.id, q);
      showToast(`Added ${q}x ${product.name} to Cart`, 'success');
      closeModal();
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}
