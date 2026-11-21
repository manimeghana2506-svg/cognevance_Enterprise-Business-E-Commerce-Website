# NOVA ENTERPRISE - Comprehensive Features Inventory

## 1. UI & Interactive UX
- **Dynamic Theme Switcher**: Instant transition between Light and Dark themes with zero flash of unstyled content (FOUC) and persistent `localStorage` preference.
- **Glassmorphic Sticky Header**: Dynamic background blur with scroll detection, active link indicator, and mobile flyout navigation drawer.
- **Micro-Interactions**:
  - Interactive metric counter numbers with smooth ease-out animation.
  - Floating badges with animated pulsing status indicators.
  - Interactive product hover state with elevation lift, image zoom, and quick action reveals.
- **Global Toast Notification Engine**: Custom toast manager displaying success, error, and informational messages with auto-dismiss timers and manual close controls.
- **Global Quick View Modal**: Inspect any product directly without navigating away, configure quantities, and add to cart instantly.
- **Command/Keyboard Search Modal**: Activated via navigation or `Ctrl+K` / `Cmd+K` keyboard shortcut with instant character-by-character search.

---

## 2. E-Commerce Capabilities
- **Comprehensive Product Catalog**:
  - 12 fully documented enterprise products across 5 primary categories (Servers & Cloud, Cybersecurity, Workstations, IoT & Smart Devices, Accessories).
  - Rich metadata: SKUs, high-res galleries, spec matrices, real-time stock counts, and verified reviews.
- **Dynamic Search & Multi-Filter Bar**:
  - Filter by category with item count tags.
  - Smooth price range slider ($200 - $10,000).
  - Live query search by model name, description, and SKU.
  - Sorting by Featured, Price (Low to High), Price (High to Low), and Rating.
  - View switcher: Toggle between 3-column Grid view and dense List view.
- **Shopping Cart System**:
  - Slide-out Cart Drawer accessible from anywhere on the website.
  - Real-time subtotal, freight calculation (free over $3,000), and corporate sales tax.
  - Stepper quantity controls (`+` / `-`) and item removal.
  - Promotional coupon engine (`SAVE20` activates 20% discount; `ENTERPRISE10` activates 10%).
- **Enterprise Wishlist**:
  - One-click heart toggle on product cards and detail pages.
  - Dedicated slide-out drawer with one-click transfer to shopping cart.
- **Multi-Step Checkout Wizard**:
  - Step 1: Enterprise Procurement & Destination Receiving Dock.
  - Step 2: Payment options (Credit Card with live card mirror, Net 30 Invoicing, SWIFT wire transfer).
  - Step 3: Review & Final Authorization.
  - Real-time credit card formatting and visual card mirror.
  - Order submission simulation that generates a unique `NV-ORD-XXXXXX` confirmation ID and prints invoice receipts.

---

## 3. Enterprise Business Tools
- **Interactive ROI Calculator (`services.html`)**:
  - Dynamic sliders for annual cloud spend, peak transaction volume, and node fleet size.
  - Live projection of annual dollar savings, percentage latency reduction, and payback timeline.
- **Global Department Routing (`contact.html`)**:
  - Form routing to Hardware Sales, Cloud Architecture, Cyber Shield, or SRE teams.
  - Interactive office cards for San Francisco, London, Singapore, and Frankfurt.
  - Expandable FAQ accordions.
- **Client Portal & SSO Simulation (`login.html`)**:
  - Dual-tabbed interface between Sign In and Tenant Account Creation.
  - Live password strength calculation meter (Weak, Fair, Strong, Enterprise Grade).
  - One-click SSO federation simulations for Google Workspace, Microsoft Entra ID, and Okta.
