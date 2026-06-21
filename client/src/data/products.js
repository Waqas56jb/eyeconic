// Eyeconic — product catalogue (mock data)
// HD imagery served from Unsplash — OPTICAL ONLY:
// glasses, frames, lenses, sunglasses, optical store & eye-test machine.

const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// --- curated optical-only image pool ---
const GLASSES = '1574258495973-f010dfbb5371' // round prescription glasses
const GLASSES2 = '1511499767150-a48a237f0083' // glasses on book
const SUN1 = '1508296695146-257a814070b4' // black sunglasses
const SUN2 = '1572635196237-14b3f281503f' // sunglasses on display
const SUN3 = '1473496169904-658ba7c44d8a' // sunglasses
const STORE = '1577803645773-f96470509666' // optical store frame wall
const MACHINE = '1579684385127-1ef15d508118' // phoropter / eye-test machine

export const categories = [
  {
    id: 'eyeglasses',
    name: 'Prescription Glasses',
    tagline: 'Crafted clarity, all day',
    image: img(GLASSES),
    count: 248,
  },
  {
    id: 'sunglasses',
    name: 'Sunglasses',
    tagline: 'Shade with character',
    image: img(SUN1),
    count: 186,
  },
  {
    id: 'bluelight',
    name: 'Blue-Light Glasses',
    tagline: 'Screens, softened',
    image: img(GLASSES2),
    count: 94,
  },
  {
    id: 'lenses',
    name: 'Lenses & Coatings',
    tagline: 'Precision crafted',
    image: img(STORE),
    count: 72,
  },
  {
    id: 'frames',
    name: 'Designer Frames',
    tagline: 'Imported & exclusive',
    image: img(SUN2),
    count: 158,
  },
  {
    id: 'accessories',
    name: 'Cases & Care',
    tagline: 'Cleaning & protection',
    image: img(GLASSES),
    count: 64,
  },
]

export const products = [
  {
    id: 'aria-round',
    name: 'Aria Round',
    category: 'eyeglasses',
    categoryLabel: 'Prescription Glasses',
    gender: 'women',
    price: 129,
    oldPrice: 169,
    rating: 4.9,
    reviews: 214,
    colors: ['#2A2A28', '#8B5E3C', '#C9A96E'],
    material: 'Italian Acetate',
    shape: 'Round',
    badges: ['Best Seller'],
    image: img(GLASSES),
    gallery: [img(GLASSES), img(STORE), img(GLASSES2)],
    description:
      'A timeless featherweight round frame hand-polished from Italian acetate. Balanced, barely-there comfort for all-day wear with our anti-glare clarity lenses.',
  },
  {
    id: 'milan-aviator',
    name: 'Milan Aviator',
    category: 'sunglasses',
    categoryLabel: 'Sunglasses',
    gender: 'men',
    price: 159,
    oldPrice: null,
    rating: 4.8,
    reviews: 178,
    colors: ['#C9A96E', '#2A2A28', '#759E77'],
    material: 'Surgical Steel',
    shape: 'Aviator',
    badges: ['New'],
    image: img(SUN1),
    gallery: [img(SUN1), img(SUN2), img(SUN3)],
    description:
      'A modern take on the classic aviator with polarised, UV400-rated lenses and lightweight surgical-steel temples. Imported, premium build.',
  },
  {
    id: 'nova-cat-eye',
    name: 'Nova Cat-Eye',
    category: 'eyeglasses',
    categoryLabel: 'Prescription Glasses',
    gender: 'women',
    price: 139,
    oldPrice: 179,
    rating: 4.9,
    reviews: 142,
    colors: ['#2A2A28', '#8BAF8D', '#8B5E3C'],
    material: 'Bio-Acetate',
    shape: 'Cat-Eye',
    badges: ['Trending'],
    image: img(GLASSES2),
    gallery: [img(GLASSES2), img(GLASSES), img(STORE)],
    description:
      'A confident cat-eye silhouette in sustainable bio-acetate. Sculpted to flatter, finished with hidden spring hinges for a secure, gentle fit.',
  },
  {
    id: 'atlas-square',
    name: 'Atlas Square',
    category: 'eyeglasses',
    categoryLabel: 'Prescription Glasses',
    gender: 'men',
    price: 119,
    oldPrice: null,
    rating: 4.7,
    reviews: 96,
    colors: ['#2A2A28', '#5C5C58', '#8B5E3C'],
    material: 'Titanium',
    shape: 'Square',
    badges: [],
    image: img(GLASSES),
    gallery: [img(GLASSES), img(GLASSES2), img(STORE)],
    description:
      'Structured, sharp and impossibly light — a full-rim square frame milled from aerospace-grade titanium. Hypoallergenic and built to last.',
  },
  {
    id: 'luna-bluelight',
    name: 'Luna Blue-Light',
    category: 'bluelight',
    categoryLabel: 'Blue-Light Glasses',
    gender: 'women',
    price: 89,
    oldPrice: 119,
    rating: 4.8,
    reviews: 203,
    colors: ['#C8DEC9', '#2A2A28', '#E8D5B0'],
    material: 'TR90 Polymer',
    shape: 'Oval',
    badges: ['Best Seller'],
    image: img(GLASSES2),
    gallery: [img(GLASSES2), img(GLASSES), img(STORE)],
    description:
      'Filters up to 40% of harmful blue light to soothe tired eyes during long screen days. Flexible, ultra-light TR90 frame you forget you are wearing.',
  },
  {
    id: 'orion-wayfarer',
    name: 'Orion Wayfarer',
    category: 'sunglasses',
    categoryLabel: 'Sunglasses',
    gender: 'men',
    price: 145,
    oldPrice: 185,
    rating: 4.9,
    reviews: 267,
    colors: ['#2A2A28', '#8B5E3C', '#759E77'],
    material: 'Italian Acetate',
    shape: 'Wayfarer',
    badges: ['Best Seller'],
    image: img(SUN2),
    gallery: [img(SUN2), img(SUN1), img(SUN3)],
    description:
      'The icon, refined. Bold acetate wayfarers with polarised contrast lenses that cut glare and sharpen colour. Imported quality, made to be noticed.',
  },
  {
    id: 'iris-rimless',
    name: 'Iris Rimless',
    category: 'eyeglasses',
    categoryLabel: 'Prescription Glasses',
    gender: 'women',
    price: 175,
    oldPrice: null,
    rating: 4.8,
    reviews: 84,
    colors: ['#C9A96E', '#9A9A94', '#8BAF8D'],
    material: 'Titanium',
    shape: 'Rimless',
    badges: ['Premium'],
    image: img(STORE),
    gallery: [img(STORE), img(GLASSES), img(GLASSES2)],
    description:
      'Whisper-light and almost invisible — a rimless titanium frame for those who prefer their eyewear to disappear. Effortless elegance, zero weight.',
  },
  {
    id: 'vista-rectangle',
    name: 'Vista Rectangle',
    category: 'frames',
    categoryLabel: 'Designer Frames',
    gender: 'unisex',
    price: 109,
    oldPrice: 139,
    rating: 4.7,
    reviews: 121,
    colors: ['#2A2A28', '#8B5E3C', '#5C5C58'],
    material: 'Acetate',
    shape: 'Rectangle',
    badges: ['Imported'],
    image: img(STORE),
    gallery: [img(STORE), img(GLASSES), img(GLASSES2)],
    description:
      'A clean, confident rectangular frame from our imported designer range. A versatile everyday silhouette built to pair with any prescription lens.',
  },
  {
    id: 'sol-oversized',
    name: 'Sol Oversized',
    category: 'sunglasses',
    categoryLabel: 'Sunglasses',
    gender: 'women',
    price: 165,
    oldPrice: null,
    rating: 4.7,
    reviews: 109,
    colors: ['#2A2A28', '#8B5E3C', '#E8D5B0'],
    material: 'Bio-Acetate',
    shape: 'Oversized',
    badges: ['New'],
    image: img(SUN3),
    gallery: [img(SUN3), img(SUN2), img(SUN1)],
    description:
      'Glamour, dialled up. Oversized bio-acetate frames with gradient UV400 lenses for sweeping coverage and effortless main-character energy.',
  },
  {
    id: 'echo-bluelight',
    name: 'Echo Blue-Light',
    category: 'bluelight',
    categoryLabel: 'Blue-Light Glasses',
    gender: 'men',
    price: 95,
    oldPrice: null,
    rating: 4.6,
    reviews: 77,
    colors: ['#2A2A28', '#5C5C58', '#8BAF8D'],
    material: 'Acetate',
    shape: 'Rectangle',
    badges: [],
    image: img(GLASSES2),
    gallery: [img(GLASSES2), img(GLASSES), img(STORE)],
    description:
      'A clean rectangular frame engineered for focus. Blue-light filtering lenses reduce digital eye strain so you stay sharp through the longest sessions.',
  },
  {
    id: 'clarity-hd-lenses',
    name: 'Clarity HD Lenses',
    category: 'lenses',
    categoryLabel: 'Lenses & Coatings',
    gender: 'unisex',
    price: 49,
    oldPrice: 69,
    rating: 4.8,
    reviews: 312,
    colors: ['#8BAF8D'],
    material: 'High-Index 1.67',
    shape: 'Single Vision',
    badges: ['Lab Crafted'],
    image: img(MACHINE),
    gallery: [img(MACHINE), img(STORE), img(GLASSES)],
    description:
      'Thin, light high-index lenses cut and coated in our own precision lab — with anti-glare, scratch-resistant and optional blue-light filtering finishes.',
  },
  {
    id: 'leo-clubmaster',
    name: 'Leo Clubmaster',
    category: 'sunglasses',
    categoryLabel: 'Sunglasses',
    gender: 'men',
    price: 149,
    oldPrice: 189,
    rating: 4.8,
    reviews: 158,
    colors: ['#2A2A28', '#8B5E3C', '#C9A96E'],
    material: 'Acetate + Metal',
    shape: 'Browline',
    badges: ['Trending'],
    image: img(SUN2),
    gallery: [img(SUN2), img(SUN1), img(SUN3)],
    description:
      'Retro browline charm with a modern backbone. Acetate brow, slim metal rims and polarised lenses — vintage soul, contemporary clarity.',
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)

export const getRelated = (product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, limit)
