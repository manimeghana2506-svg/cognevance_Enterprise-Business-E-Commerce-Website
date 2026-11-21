/**
 * NOVA ENTERPRISE - Contact Page Controller
 * Form validation, office cards render, FAQ accordions
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initFAQAccordions();
  renderOfficeLocations();
});

function initContactForm() {
  const form = document.getElementById('enterprise-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const company = document.getElementById('contact-company').value.trim();
    const dept = document.getElementById('contact-dept').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !company || !message) {
      showToast('Please fill out all required enterprise contact fields', 'error');
      return;
    }

    if (!email.includes('@')) {
      showToast('Please provide a valid corporate business email', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Dispatching Inquiry to ${dept}...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast(`Thank you, ${name}! Your inquiry has been routed to our ${dept} team. A senior specialist will reply within 4 business hours.`, 'success', 6000);
    }, 1200);
  });
}

function initFAQAccordions() {
  const faqItems = document.querySelectorAll('.accordion-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

function renderOfficeLocations() {
  const container = document.getElementById('offices-grid-container');
  if (!container || !NOVA_DATA.offices) return;

  container.innerHTML = NOVA_DATA.offices.map(office => `
    <div class="card" style="padding:28px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
        <span class="badge badge-primary">${office.type}</span>
      </div>
      <h3 style="font-size:1.4rem; margin-bottom:8px;">${office.city}, ${office.country}</h3>
      <p style="font-size:0.92rem; margin-bottom:16px;">${office.address}</p>
      <div style="display:flex; flex-direction:column; gap:8px; font-size:0.88rem; border-top:1px solid var(--border-subtle); padding-top:14px;">
        <a href="tel:${office.phone}" style="display:flex; align-items:center; gap:8px; color:var(--text-main); font-weight:600;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          ${office.phone}
        </a>
        <a href="mailto:${office.email}" style="display:flex; align-items:center; gap:8px; color:var(--color-primary); font-weight:600;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          ${office.email}
        </a>
      </div>
    </div>
  `).join('');
}
