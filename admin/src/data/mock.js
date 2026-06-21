// Eyeconic Admin — seed / mock data
// (Replaced by backend API later. For now persisted to localStorage.)

const img = (id, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const GLASSES = img('1574258495973-f010dfbb5371')
const GLASSES2 = img('1511499767150-a48a237f0083')
const SUN1 = img('1508296695146-257a814070b4')
const SUN2 = img('1572635196237-14b3f281503f')
const SUN3 = img('1473496169904-658ba7c44d8a')
const STORE = img('1577803645773-f96470509666')

export const CATEGORIES = [
  'Prescription Glasses',
  'Sunglasses',
  'Blue-Light Glasses',
  'Designer Frames',
  'Lenses & Coatings',
  'Accessories',
]

export const MATERIALS = [
  'Italian Acetate',
  'Bio-Acetate',
  'Titanium',
  'Surgical Steel',
  'TR90 Polymer',
  'Acetate + Metal',
]

export const SHAPES = [
  'Round',
  'Square',
  'Rectangle',
  'Cat-Eye',
  'Aviator',
  'Wayfarer',
  'Oversized',
  'Rimless',
  'Browline',
]

export const FEATURES = [
  'Polarised',
  'UV400 Protection',
  'Anti-Glare',
  'Blue-Light Filter',
  'Scratch Resistant',
  'Lightweight',
  'Spring Hinges',
  'Photochromic',
  'Water Resistant',
]

export const BADGES = ['None', 'Best Seller', 'New', 'Trending', 'Premium']

export const seedProducts = [
  {
    id: 'aria-round',
    name: 'Aria Round',
    category: 'Prescription Glasses',
    gender: 'Women',
    price: 129,
    oldPrice: 169,
    stock: 42,
    material: 'Italian Acetate',
    shape: 'Round',
    badge: 'Best Seller',
    features: ['Anti-Glare', 'Lightweight', 'Spring Hinges'],
    status: 'active',
    images: [GLASSES, STORE, GLASSES2],
    description:
      'A timeless featherweight round frame hand-polished from Italian acetate with anti-glare clarity lenses.',
    createdAt: '2026-05-02',
  },
  {
    id: 'milan-aviator',
    name: 'Milan Aviator',
    category: 'Sunglasses',
    gender: 'Men',
    price: 159,
    oldPrice: null,
    stock: 28,
    material: 'Surgical Steel',
    shape: 'Aviator',
    badge: 'New',
    features: ['Polarised', 'UV400 Protection', 'Lightweight'],
    status: 'active',
    images: [SUN1, SUN2, SUN3],
    description:
      'A modern aviator with polarised, UV400-rated lenses and lightweight surgical-steel temples.',
    createdAt: '2026-05-10',
  },
  {
    id: 'nova-cat-eye',
    name: 'Nova Cat-Eye',
    category: 'Prescription Glasses',
    gender: 'Women',
    price: 139,
    oldPrice: 179,
    stock: 16,
    material: 'Bio-Acetate',
    shape: 'Cat-Eye',
    badge: 'Trending',
    features: ['Anti-Glare', 'Spring Hinges'],
    status: 'active',
    images: [GLASSES2, GLASSES, STORE],
    description:
      'A confident cat-eye silhouette in sustainable bio-acetate with hidden spring hinges.',
    createdAt: '2026-05-14',
  },
  {
    id: 'luna-bluelight',
    name: 'Luna Blue-Light',
    category: 'Blue-Light Glasses',
    gender: 'Women',
    price: 89,
    oldPrice: 119,
    stock: 7,
    material: 'TR90 Polymer',
    shape: 'Round',
    badge: 'Best Seller',
    features: ['Blue-Light Filter', 'Lightweight', 'Scratch Resistant'],
    status: 'active',
    images: [GLASSES2, GLASSES, STORE],
    description:
      'Filters up to 40% of blue light to soothe tired eyes during long screen days.',
    createdAt: '2026-05-20',
  },
  {
    id: 'orion-wayfarer',
    name: 'Orion Wayfarer',
    category: 'Sunglasses',
    gender: 'Men',
    price: 145,
    oldPrice: 185,
    stock: 0,
    material: 'Italian Acetate',
    shape: 'Wayfarer',
    badge: 'Best Seller',
    features: ['Polarised', 'UV400 Protection'],
    status: 'active',
    images: [SUN2, SUN1, SUN3],
    description:
      'Bold acetate wayfarers with polarised contrast lenses that cut glare and sharpen colour.',
    createdAt: '2026-05-24',
  },
  {
    id: 'vista-rectangle',
    name: 'Vista Rectangle',
    category: 'Designer Frames',
    gender: 'Unisex',
    price: 109,
    oldPrice: 139,
    stock: 33,
    material: 'Acetate + Metal',
    shape: 'Rectangle',
    badge: 'None',
    features: ['Anti-Glare', 'Lightweight'],
    status: 'draft',
    images: [STORE, GLASSES, GLASSES2],
    description:
      'A clean, confident rectangular frame from our imported designer range.',
    createdAt: '2026-06-01',
  },
]

const customers = [
  { name: 'Ayesha Khan', email: 'ayesha.k@email.com', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Daniyal Ahmed', email: 'daniyal@email.com', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sara Malik', email: 'sara.m@email.com', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bilal Hussain', email: 'bilal.h@email.com', avatar: 'https://randomuser.me/api/portraits/men/76.jpg' },
  { name: 'Hina Raza', email: 'hina.r@email.com', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { name: 'Usman Tariq', email: 'usman.t@email.com', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Mariam Asif', email: 'mariam@email.com', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' },
  { name: 'Faraz Sheikh', email: 'faraz.s@email.com', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
]

// status: processing | shipped | delivered | cancelled | pending
export const seedOrders = [
  { id: 'EYE-2041', cust: 0, items: 'Aria Round + Clarity Lenses', qty: 2, total: 258, method: 'Visa •••• 4921', status: 'processing', date: '2026-06-21', city: 'Lahore' },
  { id: 'EYE-2040', cust: 1, items: 'Orion Wayfarer', qty: 1, total: 145, method: 'PayPal', status: 'shipped', date: '2026-06-21', city: 'Karachi' },
  { id: 'EYE-2039', cust: 2, items: 'Nova Cat-Eye', qty: 1, total: 139, method: 'Mastercard •••• 7782', status: 'delivered', date: '2026-06-20', city: 'Islamabad' },
  { id: 'EYE-2038', cust: 3, items: 'Milan Aviator', qty: 1, total: 159, method: 'Cash on Delivery', status: 'delivered', date: '2026-06-20', city: 'Lahore' },
  { id: 'EYE-2037', cust: 4, items: 'Luna Blue-Light x2', qty: 2, total: 178, method: 'Visa •••• 1130', status: 'cancelled', date: '2026-06-19', city: 'Faisalabad' },
  { id: 'EYE-2036', cust: 5, items: 'Vista Rectangle', qty: 1, total: 109, method: 'Easypaisa', status: 'pending', date: '2026-06-19', city: 'Multan' },
  { id: 'EYE-2035', cust: 6, items: 'Aria Round', qty: 1, total: 129, method: 'Mastercard •••• 3344', status: 'delivered', date: '2026-06-18', city: 'Lahore' },
  { id: 'EYE-2034', cust: 7, items: 'Orion Wayfarer + Sun Tint', qty: 1, total: 195, method: 'PayPal', status: 'shipped', date: '2026-06-18', city: 'Rawalpindi' },
  { id: 'EYE-2033', cust: 0, items: 'Clarity HD Lenses', qty: 1, total: 49, method: 'Visa •••• 4921', status: 'delivered', date: '2026-06-17', city: 'Lahore' },
  { id: 'EYE-2032', cust: 2, items: 'Milan Aviator', qty: 1, total: 159, method: 'JazzCash', status: 'cancelled', date: '2026-06-16', city: 'Islamabad' },
  { id: 'EYE-2031', cust: 3, items: 'Nova Cat-Eye + Blue-Light', qty: 1, total: 168, method: 'Cash on Delivery', status: 'delivered', date: '2026-06-15', city: 'Lahore' },
  { id: 'EYE-2030', cust: 5, items: 'Luna Blue-Light', qty: 1, total: 89, method: 'Visa •••• 1130', status: 'processing', date: '2026-06-15', city: 'Multan' },
].map((o) => ({ ...o, customer: customers[o.cust] }))

export const seedTickets = [
  {
    id: 't1',
    customer: customers[0],
    subject: 'When will my order ship?',
    time: '10:24 AM',
    unread: true,
    messages: [
      { from: 'them', text: 'Hi! I placed order EYE-2041 yesterday — when will it ship?', time: '10:20 AM' },
      { from: 'them', text: 'I need them before the weekend if possible 🙏', time: '10:24 AM' },
    ],
  },
  {
    id: 't2',
    customer: customers[2],
    subject: 'Lens prescription question',
    time: '09:10 AM',
    unread: true,
    messages: [
      { from: 'them', text: 'Can I add my prescription after ordering the Nova Cat-Eye?', time: '09:08 AM' },
      { from: 'me', text: 'Absolutely! You can upload it from your order page, or we can email you a link.', time: '09:10 AM' },
    ],
  },
  {
    id: 't3',
    customer: customers[4],
    subject: 'Return request — Luna Blue-Light',
    time: 'Yesterday',
    unread: false,
    messages: [
      { from: 'them', text: 'The fit is a little tight for me, can I exchange for a larger size?', time: 'Yesterday' },
      { from: 'me', text: 'Of course — 30-day free returns. I’ll start an exchange for you now.', time: 'Yesterday' },
      { from: 'them', text: 'Thank you so much, great service!', time: 'Yesterday' },
    ],
  },
  {
    id: 't4',
    customer: customers[7],
    subject: 'Book a home eye test',
    time: '2 days ago',
    unread: false,
    messages: [
      { from: 'them', text: 'Do you offer home eye testing in Rawalpindi?', time: '2 days ago' },
      { from: 'me', text: 'Yes we do! Our mobile unit covers Rawalpindi & Islamabad. What day suits you?', time: '2 days ago' },
    ],
  },
]

export const defaultSettings = {
  storeName: 'Eyeconic',
  tagline: 'See the world beautifully',
  email: 'hello@eyeconic.com',
  phone: '+92 300 123 4567',
  address: '42 Vision Avenue, Gulberg III, Lahore',
  currency: 'USD ($)',
  freeShipThreshold: 99,
  taxRate: 0,
  notifyOrders: true,
  notifyStock: true,
  notifyReviews: false,
  codEnabled: true,
  stripeEnabled: true,
  paypalEnabled: true,
}

export const salesChart = [
  { label: 'Mon', value: 62 },
  { label: 'Tue', value: 78 },
  { label: 'Wed', value: 54 },
  { label: 'Thu', value: 91 },
  { label: 'Fri', value: 84 },
  { label: 'Sat', value: 100 },
  { label: 'Sun', value: 73 },
]
