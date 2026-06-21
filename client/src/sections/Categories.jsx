import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { categories } from '../data/products'

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="head-row">
          <div className="section-head">
            <span className="eyebrow">Find your fit</span>
            <h2 className="h-section">
              Shop by <span className="accent">category</span>
            </h2>
          </div>
          <Link to="/shop" className="btn btn-ghost">
            View all <FiArrowRight />
          </Link>
        </div>

        <div className="cat-grid">
          {categories.map((c) => (
            <Link
              to={`/shop?cat=${c.id}`}
              className="cat-card reveal"
              key={c.id}
            >
              <img src={c.image} alt={c.name} loading="lazy" />
              <div className="cat-info">
                <h3>{c.name}</h3>
                <span>{c.tagline}</span>
                <span className="cat-count">{c.count} styles</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
