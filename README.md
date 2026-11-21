# NOVA Enterprise - High-Performance Digital Commerce & Infrastructure Platform

![NOVA Enterprise Platform](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80)

> A modern, premium, fully responsive **Enterprise Business & E-Commerce Website** featuring sleek UI/UX, responsive navigation, dark/light themes, smooth animations, interactive commerce workflows, and production-ready architecture.

---

## 🌟 Key Highlights

- **10 Complete, Production-Ready Pages**:
  - `index.html`: High-impact corporate homepage, bento grid features, live metrics counters, case studies.
  - `about.html`: Company mission, executive leadership team, and company milestone timeline.
  - `services.html`: Enterprise cloud & AI solutions + **Interactive Enterprise ROI Savings Calculator**.
  - `products.html`: Hardware architecture showcase, engineering pillars, and technical comparison matrix.
  - `shop.html`: Complete e-commerce catalog with live search, multi-category filters, price slider, and grid/list view toggle.
  - `product-details.html`: Dynamic product loader with thumbnail image switcher, specs tab, reviews, and quantity stepper.
  - `checkout.html`: Multi-step checkout wizard with live interactive credit card mirror, Net 30 invoicing, and order receipt modal.
  - `contact.html`: Working enterprise inquiry form with validation, department routing, global offices, and expandable FAQs.
  - `login.html`: Dual-tabbed client portal with real-time password strength meter and Enterprise SSO simulation.
  - `style-guide.html`: Design system tokens, typography scale, color palette, buttons, cards, and form controls.
- **Enterprise E-Commerce Engine**:
  - Slide-out Cart Drawer with subtotal, freight calculation, and promotional coupons (Try `SAVE20` or `ENTERPRISE10`).
  - Slide-out Wishlist Drawer with one-click transfer to shopping cart.
  - Quick View Modal to preview any product without leaving the catalog.
  - Global Search Modal with `Ctrl+K` / `Cmd+K` keyboard shortcut.
- **Modern UI & Responsive Design**:
  - Dual Theme Engine: Seamless Dark & Light mode toggle with `localStorage` persistence.
  - Micro-Interactions: Number count-up animations, smooth hover states, and glassmorphic navigation blur.
  - 100% Mobile Responsive: Tested across desktop, tablet, and mobile viewports.
  - Zero external npm runtime dependencies required—pure standard HTML5, CSS3 variables, and modern ES6 JavaScript.

---

## 🏗️ Technical Stack

- **Markup**: Semantic HTML5 with accessibility (ARIA) attributes and OpenGraph metadata.
- **Styling**: Vanilla CSS3 using custom CSS variables (Design Tokens), Flexbox, CSS Grid, and GPU-accelerated keyframe transitions.
- **Scripts**: Modular vanilla JavaScript (ES6+ classes, reactive observer patterns, `localStorage` persistence).
- **Typography**: Google Fonts (`Space Grotesk` for display headings, `Plus Jakarta Sans` for UI copy).

---

## 📁 Project Directory Structure

```
Enterprise Business & E-Commerce Website/
├── index.html                   # Homepage & Enterprise Hero
├── about.html                   # About NOVA & Executive Team
├── services.html                # Services & Interactive ROI Calculator
├── products.html                # Hardware Architecture & Specs
├── shop.html                    # E-Commerce Storefront
├── product-details.html         # Dynamic Product Details & Gallery
├── checkout.html                # Multi-Step Checkout & Card Mirror
├── contact.html                 # Contact Form & Global Offices
├── login.html                   # Portal SSO & Dual-Tab Auth
├── style-guide.html             # Living Design System & Style Guide
├── css/
│   ├── main.css                 # Base tokens, reset, typography & layout
│   ├── components.css           # Drawers, modals, toasts, cards, buttons
│   └── pages.css                # Page-specific complex layouts & hero
├── js/
│   ├── data.js                  # Comprehensive products, team, FAQs data
│   ├── store.js                 # State management (Cart, Wishlist, Theme)
│   ├── components.js            # Drawers, quick view, search modal, toasts
│   ├── main.js                  # Scroll animations & counter numbers
│   ├── shop.js                  # Filter bar, price slider, sorting, views
│   ├── product-details.js       # Dynamic loader, gallery switcher, tabs
│   ├── checkout.js              # Wizard form, card mirror, receipt modal
│   ├── contact.js               # Form validation & office cards
│   └── auth.js                  # Password strength meter & SSO simulator
├── docs/
│   ├── ARCHITECTURE.md          # Architecture & data flow documentation
│   ├── FEATURES.md              # Detailed features inventory
│   └── WORKFLOWS.md             # Key user journey walkthroughs
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Local Preview
Because this project is built using standard modern web technologies, you can open any `.html` file directly in your browser, or run a local HTTP server:

Using Python:
```bash
python -m http.server 3000
```

Using Node.js:
```bash
npx serve -l 3000
```

Then visit:
```
http://localhost:3000
```

---

## ⚡ Interactive Coupon Codes
In the shopping cart drawer or checkout summary, test the promotional coupon engine with:
- `SAVE20`: Activates a 20% discount on all enterprise systems.
- `ENTERPRISE10`: Activates a 10% enterprise discount.

---

## 🚢 Deployment Ready

This website is production-ready and can be deployed with zero build step to any static hosting provider:
- **GitHub Pages**: Push this directory to your GitHub repo and enable GitHub Pages under *Settings > Pages*.
- **Vercel**: Run `vercel` or link your GitHub repository.
- **Netlify**: Drag-and-drop the project folder onto the Netlify dashboard or link via Git.

---

## 📄 License & Attribution
Designed and built for Enterprise Digital Commerce. All images curated from Unsplash under open commercial licenses.
