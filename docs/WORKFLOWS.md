# NOVA ENTERPRISE - Workflows & User Journeys

## Workflow 1: Catalog Discovery & Quick Evaluation
1. **Landing & Navigation**:
   - The user visits `index.html` or `shop.html`.
   - The user can press `Ctrl+K` anywhere on the site to trigger the search modal and filter products instantaneously by model name, category, or SKU.
2. **Filtering & View Customization**:
   - In `shop.html`, selecting any category (e.g. *Cybersecurity*) triggers instant, client-side re-rendering.
   - Adjusting the price slider updates the upper ceiling and filters items with zero latency.
   - The user toggles between the 3-column Grid view and the dense List view.
3. **Quick View Inspection**:
   - Clicking the Quick View icon on any product card opens the modal overlay.
   - The user can adjust quantity, read key features, and click "Add to Cart", which dispatches a toast notification and auto-updates the header badge counter.

---

## Workflow 2: Enterprise Procurement & Checkout Flow
1. **Cart Review & Coupon Application**:
   - The user clicks the cart icon in the top navigation to slide out the Cart Drawer.
   - Entering promotional code `SAVE20` triggers discount calculation (20% off subtotal).
   - Orders above $3,000 automatically qualify for Free Insured Air Freight ($0.00).
2. **Initiating Checkout**:
   - Clicking "Proceed to Checkout" navigates the user to `checkout.html`.
3. **Multi-Step Wizard Execution**:
   - **Step 1 (Enterprise Details)**: Validates organization name, tax ID, procurement officer contact info, and dock receiving address.
   - **Step 2 (Payment Authorization)**: The user chooses between Corporate Credit Card, Net 30 Invoicing, or Fedwire.
     - When typing into the card number, holder, and expiry inputs, the visual credit card mock dynamically mirrors the values in real time.
   - **Step 3 (Review & Confirmation)**: Consolidates details into an enterprise summary pane.
4. **Order Authorization**:
   - Submitting the authorization button triggers transaction security validation.
   - An enterprise confirmation receipt modal displays the unique `NV-ORD-XXXXXX` confirmation ID and allows printing of official invoice documentation.

---

## Workflow 3: Single Sign-On (SSO) & Tenant Onboarding
1. **Navigation to Portal**:
   - Accessing `login.html` presents a split-screen enterprise layout.
2. **Authentication Flow**:
   - In the **Sign In** tab, entering corporate credentials validates password format and creates an active session.
   - In the **Create Account** tab, typing into the password field triggers dynamic evaluation of character strength (Weak &rarr; Fair &rarr; Strong &rarr; Enterprise Grade).
   - Clicking any SSO provider (Google Workspace, Microsoft Entra ID, or Okta) triggers a simulated OAuth/SAML handshake and signs in the user with an executive partner identity.

---

## Workflow 4: Financial ROI Modeling
1. **Interactive Slider Adjustments**:
   - Navigating to `services.html` displays the Financial Impact Analysis tool.
   - Moving the Annual Cloud Spend slider ($50K - $2M), Peak Transactions slider, and Fleet Nodes slider recalculates projected annual enterprise savings, percentage latency reduction, and payback timeline in real time.
2. **Inquiry Handoff**:
   - The user proceeds to `contact.html` where department routing sends the inquiry directly to the specialized team.
