// Eyeconic — editorial / marketing content (mock data)
import {
  FiEye,
  FiTruck,
  FiHome,
  FiShield,
  FiAward,
  FiClock,
  FiUploadCloud,
  FiSmartphone,
  FiHeart,
  FiCheckCircle,
  FiSearch,
  FiPackage,
} from 'react-icons/fi'

const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const stats = [
  { value: '20+', label: 'Years of eyecare' },
  { value: '180k', label: 'Happy customers' },
  { value: '600+', label: 'Frames in store' },
  { value: '4.9', label: 'Average rating' },
]

export const services = [
  {
    icon: FiEye,
    title: 'Computerised Eye Test',
    desc: 'State-of-the-art machines and certified optometrists for a precise, painless eyesight check — in-store or booked to your door.',
    image: img('1579684385127-1ef15d508118'),
  },
  {
    icon: FiHome,
    title: 'Home Eye Testing',
    desc: 'Can’t make it in? Our mobile testing unit brings the full eye exam to your living room at a time that suits you.',
    image: img('1579684385127-1ef15d508118'),
  },
  {
    icon: FiTruck,
    title: 'Free Home Delivery',
    desc: 'Your glasses fitted, checked and delivered to your doorstep — fast, insured and free on every order over $99.',
    image: img('1574258495973-f010dfbb5371'),
  },
  {
    icon: FiShield,
    title: 'Lens Crafting Lab',
    desc: 'Anti-glare, blue-light, photochromic and high-index lenses cut and fitted in our own precision lab.',
    image: img('1577803645773-f96470509666'),
  },
]

export const steps = [
  {
    icon: FiSearch,
    no: '01',
    title: 'Browse & Choose',
    desc: 'Explore 600+ imported frames or filter by shape, colour and face fit to find your match.',
  },
  {
    icon: FiEye,
    no: '02',
    title: 'Add Your Prescription',
    desc: 'Upload your prescription, enter it manually, or book a free eye test with our experts.',
  },
  {
    icon: FiPackage,
    no: '03',
    title: 'We Craft Your Lenses',
    desc: 'Our lab cuts, coats and fits your lenses to your exact prescription with a quality check.',
  },
  {
    icon: FiTruck,
    no: '04',
    title: 'Delivered To You',
    desc: 'Track your order and receive your perfectly fitted eyewear — free, fast and insured.',
  },
]

export const whyFeatures = [
  {
    icon: FiAward,
    title: 'Imported, premium quality',
    desc: 'Every frame is hand-selected from trusted international makers — Italian acetate, Japanese titanium and more.',
  },
  {
    icon: FiShield,
    title: '2-year warranty',
    desc: 'Frames and lenses are covered for two full years against manufacturing defects, no questions asked.',
  },
  {
    icon: FiClock,
    title: '20 years of expertise',
    desc: 'Two decades of caring for your vision with certified optometrists and the latest testing technology.',
  },
  {
    icon: FiHeart,
    title: 'Free 30-day returns',
    desc: 'Not in love? Send them back within 30 days for a full refund or a no-fuss exchange.',
  },
]

export const prescriptionSteps = [
  {
    icon: FiUploadCloud,
    title: 'Upload your prescription',
    desc: 'Snap a photo or upload a PDF of your latest prescription at checkout.',
  },
  {
    icon: FiSmartphone,
    title: 'Or enter it manually',
    desc: 'Type in your SPH, CYL, AXIS and PD values with guided help from us.',
  },
  {
    icon: FiCheckCircle,
    title: 'We verify everything',
    desc: 'Our optometrists double-check every detail before your lenses are crafted.',
  },
]

export const articles = [
  {
    id: 'face-shape-guide',
    tag: 'Style Guide',
    title: 'Find the perfect frame for your face shape',
    excerpt:
      'Round, square, heart or oval — discover which silhouettes flatter you most and why.',
    image: img('1574258495973-f010dfbb5371'),
    date: 'Jun 12, 2026',
    read: '6 min read',
  },
  {
    id: 'blue-light-truth',
    tag: 'Eye Health',
    title: 'The truth about blue-light & screen time',
    excerpt:
      'How digital eye strain really works and what actually helps you see comfortably.',
    image: img('1511499767150-a48a237f0083'),
    date: 'Jun 04, 2026',
    read: '5 min read',
  },
  {
    id: 'eye-test-frequency',
    tag: 'Expert Advice',
    title: 'How often should you really get an eye test?',
    excerpt:
      'Our optometrists explain the signs your eyes are due for a professional check-up.',
    image: img('1579684385127-1ef15d508118'),
    date: 'May 28, 2026',
    read: '4 min read',
  },
]

export const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Verified Buyer',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    quote:
      'The home eye test was a revelation. The optometrist was so thorough, and my glasses arrived in three days — perfectly fitted. Eyeconic has earned a customer for life.',
  },
  {
    name: 'Daniyal Ahmed',
    role: 'Verified Buyer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    quote:
      'I’ve never owned eyewear this well made. The Orion Wayfarers feel premium, the lenses are crystal clear, and the whole ordering process was effortless.',
  },
  {
    name: 'Sara Malik',
    role: 'Verified Buyer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    quote:
      'After 20 years of eye care, you can tell these people genuinely know vision. The staff helped me choose frames that actually suit my face. Beautiful experience.',
  },
]

export const faqs = [
  {
    q: 'Can I book an eye test at home?',
    a: 'Absolutely. Our mobile testing unit brings a full computerised eye exam to your home. Just choose “Home Eye Test” at checkout or from the Services page, pick a time slot, and our certified optometrist will visit you with all the equipment.',
  },
  {
    q: 'How do I add my prescription to an order?',
    a: 'At checkout you can upload a photo or PDF of your prescription, or enter the values manually with guided help. Our optometrists verify every prescription before your lenses are crafted, so you can order with total confidence.',
  },
  {
    q: 'Are your frames imported and good quality?',
    a: 'Yes. Every frame is hand-selected from trusted international makers and built from premium materials such as Italian acetate, surgical steel and aerospace-grade titanium. All frames and lenses carry a 2-year warranty.',
  },
  {
    q: 'What lens options can I choose?',
    a: 'We craft single-vision, bifocal and progressive lenses in our own lab, with optional anti-glare, blue-light filtering, photochromic (light-adaptive) and high-index thin coatings — all fitted to your exact prescription.',
  },
  {
    q: 'How long does delivery take, and is it free?',
    a: 'Most orders are crafted and dispatched within 3–5 working days. Home delivery is fast, insured, and completely free on every order over $99. You’ll receive tracking the moment your order ships.',
  },
  {
    q: 'Can I return my glasses if they’re not right?',
    a: 'Of course. We offer free 30-day returns — if you’re not completely happy, send them back for a full refund or a hassle-free exchange. Your satisfaction is the whole point.',
  },
]

export const footerLinks = {
  Shop: [
    { label: 'Prescription Glasses', to: '/shop?cat=eyeglasses' },
    { label: 'Sunglasses', to: '/shop?cat=sunglasses' },
    { label: 'Blue-Light Glasses', to: '/shop?cat=bluelight' },
    { label: 'Contact Lenses', to: '/shop?cat=contacts' },
    { label: 'Kids Eyewear', to: '/shop?cat=kids' },
  ],
  Services: [
    { label: 'Eye Testing', to: '/about' },
    { label: 'Home Eye Test', to: '/about' },
    { label: 'Lens Crafting', to: '/about' },
    { label: 'Frame Fitting', to: '/about' },
    { label: 'Home Delivery', to: '/about' },
  ],
  Company: [
    { label: 'About Eyeconic', to: '/about' },
    { label: 'Our Story', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Careers', to: '/about' },
    { label: 'Find a Store', to: '/contact' },
  ],
  Support: [
    { label: 'Help Centre', to: '/contact' },
    { label: 'Track Order', to: '/contact' },
    { label: 'Returns & Refunds', to: '/contact' },
    { label: 'Shipping Info', to: '/contact' },
    { label: 'FAQ', to: '/contact' },
  ],
}
