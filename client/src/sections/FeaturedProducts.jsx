import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const tabs = [
  { id: 'all', label: 'Best Sellers' },
  { id: 'eyeglasses', label: 'Glasses' },
  { id: 'sunglasses', label: 'Sunglasses' },
  { id: 'bluelight', label: 'Blue-Light' },
]

export default function FeaturedProducts() {
  const [tab, setTab] = useState('all')

  const list = (
    tab === 'all'
      ? products
      : products.filter((p) => p.category === tab)
  ).slice(0, 8)

  return (
    <section className="section" id="featured">
      <div className="container">
        <div className="head-row">
          <div className="section-head">
            <span className="eyebrow">Most loved</span>
            <h2 className="h-section">
              Frames they can’t <span className="accent">stop wearing</span>
            </h2>
          </div>
          <Link to="/shop" className="btn btn-ghost">
            Shop all <FiArrowRight />
          </Link>
        </div>

        <div className="ftabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`ftab ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-4">
          {list.map((p) => (
            <div className="reveal" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
