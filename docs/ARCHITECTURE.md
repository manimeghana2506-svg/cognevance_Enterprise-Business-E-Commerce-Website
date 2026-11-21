# NOVA ENTERPRISE - Architecture & Technical Specification

## 1. System Overview
**NOVA Enterprise** is a modern, responsive, high-performance digital commerce and infrastructure web platform designed for mission-critical enterprise hardware and cloud services. The application is built using standard, modern web technologies—semantic HTML5, vanilla CSS3 custom properties (design tokens), and modular JavaScript (ES6+ classes and reactive state management).

---

## 2. File & Directory Architecture
```
Enterprise Business & E-Commerce Website/
├── index.html                   # High-impact corporate homepage & bento grid
├── about.html                   # Mission, leadership team, milestones timeline
├── services.html                # Enterprise solutions & interactive ROI calculator
├── products.html                # Hardware systems showcase & spec matrix
├── shop.html                    # Complete e-commerce catalog with multi-filters
├── product-details.html         # Dynamic product view with gallery & tabbed specs
├── checkout.html                # Multi-step checkout wizard with live card preview
├── contact.html                 # Inquiry form, worldwide offices, interactive FAQs
├── login.html                   # Authentication portal with password meter & SSO
├── style-guide.html             # Living design system, typography & UI primitives
├── css/
│   ├── main.css                 # Design tokens, reset, typography, layout & utilities
│   ├── components.css           # Navbars, drawers, modals, toasts, buttons, cards
│   └── pages.css                # Specialized page templates & complex layouts
├── js/
│   ├── data.js                  # Comprehensive data repository for products, team, FAQs
│   ├── store.js                 # Reactive state management (Cart, Wishlist, User, Theme)
│   ├── components.js            # Drawers, quick view modal, search modal, toast alerts
│   ├── main.js                  # IntersectionObserver animations & counter numbers
│   ├── shop.js                  # Filtering, live search, sorting, and view toggle
│   ├── product-details.js       # Gallery thumbnail switcher, specs table, tabs
│   ├── checkout.js              # Wizard form logic, discount calculation, order receipt
│   ├── contact.js               # Form validation & department routing
│   └── auth.js                  # Tab switching, password strength estimator, mock SSO
└── docs/
    ├── ARCHITECTURE.md          # Architectural specifications
    ├── FEATURES.md              # Feature inventory
    └── WORKFLOWS.md             # Core user journeys
```

---

## 3. State Management (`js/store.js`)
State is centralized in `NovaStore`, an observable state container instantiated as a singleton (`window.store`).

### State Schema:
- **`cart`**: Array of items `{ id, name, price, image, category, sku, quantity, options }` persisted in `localStorage['nova_cart']`.
- **`wishlist`**: Array of product IDs persisted in `localStorage['nova_wishlist']`.
- **`user`**: User profile object `{ name, email, company }` persisted in `localStorage['nova_user']`.
- **`theme`**: `'light'` or `'dark'` stored in `localStorage['nova_theme']`.
- **`promoDiscount`**: Percentage discount (e.g. 0.20 for `SAVE20`).
- **`listeners`**: Event subscribers re-invoked on every mutation to dynamically update badge counters and slide-out drawers.

---

## 4. Design System & Tokens (`css/main.css`)
- **Primary Color**: Deep Indigo (`#4f46e5`) with vibrant violet hover states.
- **Secondary Color**: High-tech Cyan (`#06b6d4`).
- **Surface Elevation**: Layered neutral surfaces (`#ffffff` / `#f8fafc` in light mode; `#0a0f1d` / `#111827` in dark mode).
- **Typography**:
  - Headings / Display: `Space Grotesk` (weights 500, 600, 700, 800)
  - Body Text: `Plus Jakarta Sans` (weights 300, 400, 500, 600, 700)
- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet Landscape: 992px - 1199px
  - Tablet Portrait: 768px - 991px
  - Mobile: < 767px
