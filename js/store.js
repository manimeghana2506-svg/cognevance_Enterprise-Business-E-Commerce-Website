/**
 * NOVA ENTERPRISE - Store & State Management
 * Handles Cart, Wishlist, Authentication status, and Theme State
 */

class NovaStore {
  constructor() {
    this.cart = this.load('nova_cart', []);
    this.wishlist = this.load('nova_wishlist', []);
    this.user = this.load('nova_user', null);
    this.theme = this.load('nova_theme', 'light');
    this.promoDiscount = 0; // percentage
    this.promoCode = '';
    this.listeners = [];
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  /* Cart Operations */
  addToCart(productId, quantity = 1, options = {}) {
    const product = NOVA_DATA.products.find(p => p.id === productId);
    if (!product) return false;

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        sku: product.sku,
        quantity: quantity,
        options: options
      });
    }

    this.save('nova_cart', this.cart);
    this.notify();
    return true;
  }

  updateQuantity(productId, newQty) {
    if (newQty <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.quantity = newQty;
      this.save('nova_cart', this.cart);
      this.notify();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.save('nova_cart', this.cart);
    this.notify();
  }

  clearCart() {
    this.cart = [];
    this.promoDiscount = 0;
    this.promoCode = '';
    this.save('nova_cart', this.cart);
    this.notify();
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  applyPromo(code) {
    const clean = (code || '').trim().toUpperCase();
    if (clean === 'SAVE20' || clean === 'NOVA20') {
      this.promoDiscount = 0.20;
      this.promoCode = clean;
      this.notify();
      return { success: true, message: 'Coupon applied! 20% discount activated.' };
    } else if (clean === 'ENTERPRISE10') {
      this.promoDiscount = 0.10;
      this.promoCode = clean;
      this.notify();
      return { success: true, message: 'Coupon applied! 10% enterprise discount activated.' };
    }
    return { success: false, message: 'Invalid or expired promotional code. Try SAVE20' };
  }

  getCartTotals() {
    const subtotal = this.getCartSubtotal();
    const discountAmount = subtotal * this.promoDiscount;
    const discountedSubtotal = subtotal - discountAmount;
    const shipping = subtotal > 3000 || subtotal === 0 ? 0 : 75; // Free freight over $3000
    const tax = discountedSubtotal * 0.0825; // 8.25% corporate tax
    const total = discountedSubtotal + shipping + tax;

    return {
      subtotal,
      discountAmount,
      discountedSubtotal,
      shipping,
      tax,
      total,
      promoCode: this.promoCode,
      promoDiscount: this.promoDiscount
    };
  }

  /* Wishlist Operations */
  toggleWishlist(productId) {
    const exists = this.wishlist.includes(productId);
    if (exists) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
    } else {
      this.wishlist.push(productId);
    }
    this.save('nova_wishlist', this.wishlist);
    this.notify();
    return !exists;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getWishlistCount() {
    return this.wishlist.length;
  }

  /* Theme Operations */
  setTheme(theme) {
    this.theme = theme;
    this.save('nova_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.notify();
  }

  toggleTheme() {
    const next = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
    return next;
  }

  /* Auth Operations */
  setUser(userData) {
    this.user = userData;
    this.save('nova_user', userData);
    this.notify();
  }

  logout() {
    this.user = null;
    this.save('nova_user', null);
    this.notify();
  }
}

// Global Singleton Instance
window.store = new NovaStore();

// Utility Currency Formatter
window.formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};
