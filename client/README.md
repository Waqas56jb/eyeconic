# Eyeconic — Client

Premium eyewear e-commerce frontend. Built with **React + Vite**, an editorial
**sage / cream** design system, `react-icons`, and `react-router-dom`.

> Client side only (storefront). Admin panel & backend come later.

## ✦ Features

- **Home** — hero with floating badges, trust bar, categories, best-sellers
  (filterable tabs), how-it-works, services, why-Eyeconic, prescription module,
  journal, testimonials, CTA & FAQ accordion.
- **Shop** — live search, category / audience / price filters, sorting, active
  filter pills, responsive product grid.
- **Product detail** — image gallery, colour & lens-type selectors, quantity,
  add-to-bag, wishlist, specs, related products.
- **Cart** — quantity controls, promo code (`EYE10` = 10% off), free-shipping
  logic, order summary. Persists to `localStorage`.
- **Wishlist** — saved frames, persisted to `localStorage`.
- **About / Services**, **Contact** (form + WhatsApp + embedded map).
- Scroll-reveal animations, float/pulse motion, fully responsive.

## ✦ Getting started

```bash
cd client
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build
npm run preview
```

## ✦ Stack

| Concern   | Choice                          |
| --------- | ------------------------------- |
| Framework | React 18 + Vite                 |
| Routing   | react-router-dom v6             |
| Icons     | react-icons (Feather)           |
| State     | Context API (cart + wishlist)   |
| Fonts     | Cormorant Garamond + DM Sans    |
| Images    | Unsplash (HD, mock catalogue)   |

## ✦ Design tokens

Sage `#8BAF8D` · Cream `#FAF7F2` · Charcoal `#2A2A28` · Gold `#C9A96E`.
Pill buttons (40px), rounded cards (20px), soft shadows, hover-lift.

All product, service, testimonial and article data is mock data in
`src/data/`.
