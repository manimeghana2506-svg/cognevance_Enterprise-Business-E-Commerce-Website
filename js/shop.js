/**
 * NOVA ENTERPRISE - Shop & Catalog Manager
 * Search, multi-category filter, price range, sorting, grid/list view
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('shop-products-container')) return;
  initShopPage();
});

function initShopPage() {
  const container = document.getElementById('shop-products-container');
  const countDisplay = document.getElementById('shop-results-count');
  const searchInput = document.getElementById('shop-search-input');
  const categoryFilters = document.querySelectorAll('.category-filter-item');
  const priceSlider = document.getElementById('price-range-slider');
  const priceValueDisplay = document.getElementById('price-range-val');
  const sortSelect = document.getElementById('shop-sort-select');
  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  let state = {
    category: 'all',
    search: '',
    maxPrice: 10000,
    sort: 'featured',
    viewMode: 'grid'
  };

  // Check URL query param for category e.g. shop.html?category=Cybersecurity
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    state.category = catParam;
    categoryFilters.forEach(item => {
      if (item.getAttribute('data-cat') === catParam) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Render initial
  renderProducts();

  // Category filter clicks
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.category = btn.getAttribute('data-cat');
      renderProducts();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Price slider
  if (priceSlider && priceValueDisplay) {
    priceSlider.addEventListener('input', (e) => {
      state.maxPrice = parseFloat(e.target.value);
      priceValueDisplay.textContent = window.formatCurrency(state.maxPrice);
      renderProducts();
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  // View mode toggling
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      container.className = 'products-container grid grid-cols-3';
    });

    viewListBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      container.className = 'products-container view-list';
    });
  }

  // Reset filters
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.category = 'all';
      state.search = '';
      state.maxPrice = 10000;
      state.sort = 'featured';

      if (searchInput) searchInput.value = '';
      if (priceSlider) {
        priceSlider.value = 10000;
        priceValueDisplay.textContent = window.formatCurrency(10000);
      }
      if (sortSelect) sortSelect.value = 'featured';

      categoryFilters.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-cat') === 'all');
      });

      renderProducts();
    });
  }

  function renderProducts() {
    let list = [...NOVA_DATA.products];

    // Filter by Category
    if (state.category !== 'all') {
      list = list.filter(p => p.category.toLowerCase() === state.category.toLowerCase());
    }

    // Filter by Search Query
    if (state.search) {
      list = list.filter(p => 
        p.name.toLowerCase().includes(state.search) ||
        p.shortDesc.toLowerCase().includes(state.search) ||
        p.category.toLowerCase().includes(state.search) ||
        p.sku.toLowerCase().includes(state.search)
      );
    }

    // Filter by Price Slider
    list = list.filter(p => p.price <= state.maxPrice);

    // Sort Products
    if (state.sort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.sort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.sort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    // Update count display
    if (countDisplay) {
      countDisplay.textContent = `Showing ${list.length} enterprise solutions`;
    }

    // Empty state check
    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1; padding: 60px 20px;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No matching enterprise products</h3>
          <p class="text-muted">Try relaxing your price filters or searching for another system component.</p>
          <button class="btn btn-secondary btn-sm" id="empty-reset-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', () => {
        resetFiltersBtn?.click();
      });
      return;
    }

    // Render cards
    let html = '';
    list.forEach(p => {
      const inWishlist = window.store.isInWishlist(p.id);
      html += `
        <article class="card card-product" data-id="${p.id}">
          <div class="card-product-media">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
            ${p.badge ? `<span class="badge badge-primary card-product-badge">${p.badge}</span>` : ''}
            <div class="card-product-actions-floating">
              <button type="button" class="floating-action-btn btn-wishlist-toggle ${inWishlist ? 'active' : ''}" data-id="${p.id}" title="Save to Wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button type="button" class="floating-action-btn btn-quickview-trigger" data-id="${p.id}" title="Quick View">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-product-body">
            <div class="card-product-cat">${p.category}</div>
            <h3 class="card-product-title">
              <a href="product-details.html?id=${p.id}">${p.name}</a>
            </h3>
            <div class="card-product-rating">
              <span class="stars">★★★★★</span>
              <span class="text-muted">(${p.rating}) • ${p.reviewCount} reviews</span>
            </div>
            <p class="text-muted" style="font-size:0.88rem; margin-bottom:14px; line-height:1.4;">${p.shortDesc}</p>
            <div class="card-product-footer">
              <div class="card-product-prices">
                <span class="card-product-price">${window.formatCurrency(p.price)}</span>
                ${p.originalPrice ? `<span class="card-product-orig-price">${window.formatCurrency(p.originalPrice)}</span>` : ''}
              </div>
              <button type="button" class="btn btn-primary btn-sm btn-add-cart" data-id="${p.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Add
              </button>
            </div>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
    bindProductCardActions(container);
  }

  function bindProductCardActions(parent) {
    // Add to cart buttons
    parent.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        window.store.addToCart(id, 1);
        const item = NOVA_DATA.products.find(p => p.id === id);
        showToast(`Added ${item?.name || 'item'} to Cart`, 'success');
      });
    });

    // Wishlist buttons
    parent.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        const added = window.store.toggleWishlist(id);
        btn.classList.toggle('active', added);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', added ? 'currentColor' : 'none');
        showToast(added ? 'Saved to enterprise wishlist' : 'Removed from wishlist', 'info');
      });
    });

    // Quick View buttons
    parent.querySelectorAll('.btn-quickview-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        window.openQuickView(id);
      });
    });
  }
}
