# Eyeconic — Admin Panel

State-of-the-art admin dashboard for the Eyeconic eyewear store. Same
**sage / cream** design language as the storefront. Built with **React + Vite**,
`react-router-dom` and `react-icons`.

> **UI only for now** — no login (as requested). All data is mock data persisted
> to `localStorage`. Backend REST API gets wired in later; the data layer already
> lives behind `AdminContext`, so swapping `localStorage` for `fetch` calls is a
> drop-in change.

## ✦ Sections (left sidebar)

| Page | What it does |
|------|--------------|
| **Dashboard** | Revenue/orders/delivered/products stats, weekly sales bar chart, inventory alerts, recent orders, top-stocked products |
| **Store** | Product catalogue grid + **Add / Edit Product** drawer — upload up to 4 photos (file or URL), name, price, compare-at price, stock, category, material, shape, badge, **features**, optional description, active/draft visibility |
| **Orders** | Active orders with tabs (pending / processing / shipped) and one-click status advance or cancel |
| **Delivered** | Completed orders + delivered revenue & AOV stats |
| **Cancelled** | Cancelled orders + value-lost & cancellation-rate stats |
| **Payments** | Transactions built from orders, collected / pending / refunded totals, CSV export button |
| **Support** | Live-style chat inbox — ticket list + conversation thread you can reply to |
| **Settings** | Store profile, shipping & tax, payment toggles, notification preferences |

## ✦ Add a product (the key flow)

Store → **Add product** → drop in 3–4 glasses photos, set the name & price,
optional description, pick features, hit **Publish**. It appears immediately in
the catalogue and is saved to `localStorage`. Toggle **Active/Draft** to control
storefront visibility. Once the backend exists, "active" products will sync to
the public website automatically.

## ✦ Run it

```bash
cd admin
npm install
npm run dev        # http://localhost:5175
```

Build:

```bash
npm run build && npm run preview
```

## ✦ Notes
- Runs on port **5175** (storefront uses 5173) so both can run side-by-side.
- The topbar "open storefront" icon links to `http://localhost:5173`.
- `vercel.json` includes the SPA rewrite so deep links work on refresh.
