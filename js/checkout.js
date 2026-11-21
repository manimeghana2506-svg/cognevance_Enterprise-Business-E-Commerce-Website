/**
 * NOVA ENTERPRISE - Multi-Step Checkout Controller
 * Step 1: Procurement / Shipping Info
 * Step 2: Payment & Live Credit Card Mirror
 * Step 3: Review & Instant Order Placement
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('checkout-wizard-form')) return;
  initCheckout();
});

function initCheckout() {
  const cart = window.store.cart;
  const checkoutItemsContainer = document.getElementById('checkout-items-summary');
  const emptyCartWarning = document.getElementById('checkout-empty-warning');
  const mainCheckoutLayout = document.getElementById('checkout-main-content');

  // If cart is completely empty, prompt to add items
  if (!cart || cart.length === 0) {
    if (emptyCartWarning) emptyCartWarning.style.display = 'block';
    if (mainCheckoutLayout) mainCheckoutLayout.style.display = 'none';
    return;
  }

  let currentStep = 1;
  const stepItems = document.querySelectorAll('.checkout-step-item');
  const stepPanels = document.querySelectorAll('.checkout-step-panel');

  const btnNext1 = document.getElementById('btn-step1-next');
  const btnPrev2 = document.getElementById('btn-step2-prev');
  const btnNext2 = document.getElementById('btn-step2-next');
  const btnPrev3 = document.getElementById('btn-step3-prev');
  const btnPlaceOrder = document.getElementById('btn-place-order');

  // Order summary side panel update
  updateOrderSummary();

  // Wizard Navigation
  function goToStep(step) {
    currentStep = step;
    stepItems.forEach(item => {
      const s = parseInt(item.getAttribute('data-step'));
      item.classList.toggle('active', s === step);
      item.classList.toggle('completed', s < step);
    });

    stepPanels.forEach(panel => {
      const s = parseInt(panel.getAttribute('data-step-panel'));
      panel.style.display = s === step ? 'block' : 'none';
    });

    window.scrollTo({ top: 120, behavior: 'smooth' });
  }

  // Step 1 Validation & Next
  if (btnNext1) {
    btnNext1.addEventListener('click', () => {
      const company = document.getElementById('chk-company').value.trim();
      const name = document.getElementById('chk-fullname').value.trim();
      const email = document.getElementById('chk-email').value.trim();
      const address = document.getElementById('chk-address').value.trim();
      const city = document.getElementById('chk-city').value.trim();
      const zip = document.getElementById('chk-zip').value.trim();

      if (!company || !name || !email || !address || !city || !zip) {
        showToast('Please complete all enterprise procurement fields', 'error');
        return;
      }

      if (!email.includes('@')) {
        showToast('Please enter a valid corporate email', 'error');
        return;
      }

      goToStep(2);
    });
  }

  // Step 2 Previous & Next
  if (btnPrev2) btnPrev2.addEventListener('click', () => goToStep(1));

  if (btnNext2) {
    btnNext2.addEventListener('click', () => {
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';
      
      if (paymentMethod === 'card') {
        const cardNum = document.getElementById('chk-card-num').value.replace(/\s+/g, '');
        const cardExp = document.getElementById('chk-card-exp').value.trim();
        const cardCvv = document.getElementById('chk-card-cvv').value.trim();

        if (cardNum.length < 15 || !cardExp || cardCvv.length < 3) {
          showToast('Please enter valid corporate payment card details', 'error');
          return;
        }
      }

      // Populate Step 3 Confirmation review
      populateReviewStep();
      goToStep(3);
    });
  }

  if (btnPrev3) btnPrev3.addEventListener('click', () => goToStep(2));

  // Payment Method Radio Switcher
  const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const cardSection = document.getElementById('payment-card-section');
  const invoiceSection = document.getElementById('payment-invoice-section');
  const wireSection = document.getElementById('payment-wire-section');

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const val = e.target.value;
      if (cardSection) cardSection.style.display = val === 'card' ? 'block' : 'none';
      if (invoiceSection) invoiceSection.style.display = val === 'invoice' ? 'block' : 'none';
      if (wireSection) wireSection.style.display = val === 'wire' ? 'block' : 'none';
    });
  });

  // Live Credit Card Input Formatting & Mirror
  const cardNumInput = document.getElementById('chk-card-num');
  const cardHolderInput = document.getElementById('chk-card-holder');
  const cardExpInput = document.getElementById('chk-card-exp');
  const cardCvvInput = document.getElementById('chk-card-cvv');

  const mirrorNum = document.getElementById('mirror-card-num');
  const mirrorHolder = document.getElementById('mirror-card-holder');
  const mirrorExp = document.getElementById('mirror-card-exp');

  if (cardNumInput) {
    cardNumInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 16);
      v = v.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = v;
      if (mirrorNum) mirrorNum.textContent = v || '•••• •••• •••• ••••';
    });
  }

  if (cardHolderInput) {
    cardHolderInput.addEventListener('input', (e) => {
      if (mirrorHolder) mirrorHolder.textContent = e.target.value.toUpperCase() || 'CORPORATE OFFICER';
    });
  }

  if (cardExpInput) {
    cardExpInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
      e.target.value = v;
      if (mirrorExp) mirrorExp.textContent = v || 'MM/YY';
    });
  }

  // Promo Code in Checkout
  const promoBtn = document.getElementById('chk-promo-btn');
  const promoInput = document.getElementById('chk-promo-input');
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const res = window.store.applyPromo(promoInput.value);
      showToast(res.message, res.success ? 'success' : 'error');
      updateOrderSummary();
    });
  }

  // Populate Step 3 details
  function populateReviewStep() {
    document.getElementById('rev-company').textContent = document.getElementById('chk-company').value;
    document.getElementById('rev-contact').textContent = `${document.getElementById('chk-fullname').value} (${document.getElementById('chk-email').value})`;
    document.getElementById('rev-address').textContent = `${document.getElementById('chk-address').value}, ${document.getElementById('chk-city').value}, ${document.getElementById('chk-country').value} - ${document.getElementById('chk-zip').value}`;
    
    const payMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';
    let payText = 'Corporate Purchasing Card (•••• ' + (cardNumInput.value.slice(-4) || '4242') + ')';
    if (payMethod === 'invoice') payText = 'Net 30 Enterprise Procurement Invoicing (PO #' + (document.getElementById('chk-po-number')?.value || 'PENDING') + ')';
    if (payMethod === 'wire') payText = 'SWIFT / Fedwire Direct Bank Clearance';
    document.getElementById('rev-payment').textContent = payText;
  }

  // Place Order Simulation
  if (btnPlaceOrder) {
    btnPlaceOrder.addEventListener('click', () => {
      btnPlaceOrder.disabled = true;
      btnPlaceOrder.innerHTML = `
        <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        Securing Transaction & Authorizing Order...
      `;

      setTimeout(() => {
        const orderId = 'NV-ORD-' + Math.floor(100000 + Math.random() * 900000);
        const orderData = {
          orderId: orderId,
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          company: document.getElementById('chk-company').value,
          contact: document.getElementById('chk-fullname').value,
          email: document.getElementById('chk-email').value,
          items: [...window.store.cart],
          totals: window.store.getCartTotals()
        };

        window.store.save('nova_last_order', orderData);
        window.store.clearCart();

        // Show Success Receipt Modal
        showOrderReceiptModal(orderData);
      }, 1500);
    });
  }

  function updateOrderSummary() {
    const totals = window.store.getCartTotals();
    const list = window.store.cart;

    if (checkoutItemsContainer) {
      checkoutItemsContainer.innerHTML = list.map(item => `
        <div class="cart-item-row" style="margin-bottom:12px; padding-bottom:12px;">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" style="width:54px; height:54px;" />
          <div class="cart-item-details">
            <h5 style="font-size:0.88rem; margin:0 0 4px;"><a href="product-details.html?id=${item.id}">${item.name}</a></h5>
            <div style="font-size:0.8rem; color:var(--text-muted); display:flex; justify-content:space-between;">
              <span>Qty: ${item.quantity}</span>
              <strong>${window.formatCurrency(item.price * item.quantity)}</strong>
            </div>
          </div>
        </div>
      `).join('');
    }

    document.getElementById('chk-subtotal').textContent = window.formatCurrency(totals.subtotal);
    document.getElementById('chk-tax').textContent = window.formatCurrency(totals.tax);
    document.getElementById('chk-shipping').textContent = totals.shipping === 0 ? 'FREE Freight' : window.formatCurrency(totals.shipping);
    document.getElementById('chk-total').textContent = window.formatCurrency(totals.total);

    const discountRow = document.getElementById('chk-discount-row');
    if (totals.discountAmount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('chk-discount').textContent = `-${window.formatCurrency(totals.discountAmount)} (${totals.promoCode})`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  function showOrderReceiptModal(order) {
    const modalHtml = `
      <div id="order-success-modal" class="nova-modal active" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" style="padding:40px; text-align:center;">
            <div style="width:72px; height:72px; border-radius:50%; background:var(--color-success-bg); color:var(--color-success); display:inline-flex; align-items:center; justify-content:center; margin-bottom:20px;">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style="margin-bottom:8px;">Enterprise Order Confirmed!</h2>
            <p class="text-muted" style="margin-bottom:24px;">Thank you for partnering with NOVA Enterprise. Your order has been dispatched into the provisioning queue.</p>
            
            <div style="background:var(--bg-subtle); border-radius:var(--radius-lg); padding:24px; text-align:left; margin-bottom:28px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:700;">
                <span>Confirmation ID:</span>
                <span class="text-primary font-display">${order.orderId}</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.92rem;">
                <span class="text-muted">Account / Enterprise:</span>
                <span>${order.company}</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.92rem;">
                <span class="text-muted">Procurement Officer:</span>
                <span>${order.contact} (${order.email})</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.92rem;">
                <span class="text-muted">Order Date:</span>
                <span>${order.date}</span>
              </div>
              <div style="display:flex; justify-content:space-between; padding-top:12px; border-top:1px dashed var(--border-color); font-weight:700; font-size:1.1rem;">
                <span>Total Amount Authorized:</span>
                <span class="text-primary">${window.formatCurrency(order.totals.total)}</span>
              </div>
            </div>

            <div style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
              <button onclick="window.print()" class="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                Print Invoice Receipt
              </button>
              <a href="shop.html" class="btn btn-primary">Return to Catalog</a>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
}
