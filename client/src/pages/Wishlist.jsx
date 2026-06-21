import { Link } from 'react-router-dom'
import { FiHeart, FiArrowRight } from 'react-icons/fi'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'
import useScrollReveal from '../hooks/useScrollReveal'
import './pages.css'

export default function Wishlist() {
  const { wishlist } = useShop()
  useScrollReveal([wishlist.length])

  if (wishlist.length === 0) {
    return (
      <main>
        <div className="empty-state">
          <FiHeart />
          <h2>Your wishlist is empty</h2>
          <p>Tap the heart on any frame to save it here for later.</p>
          <Link to="/shop" className="btn btn-sage">
            Explore frames <FiArrowRight />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="page-hero">
        <div className="blob" />
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Wishlist
          </div>
          <h1>Your Wishlist</h1>
          <p>{wishlist.length} frame(s) you’ve saved for later.</p>
        </div>
      </div>

      <section className="related" style={{ paddingTop: '3rem' }}>
        <div className="related-grid">
          {wishlist.map((p) => (
            <div className="reveal" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
