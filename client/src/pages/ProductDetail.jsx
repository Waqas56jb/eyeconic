import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  FiStar,
  FiHeart,
  FiShoppingBag,
  FiMinus,
  FiPlus,
  FiTruck,
  FiShield,
  FiRefreshCcw,
  FiEye,
} from 'react-icons/fi'
import { getProduct, getRelated } from '../data/products'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'
import useScrollReveal from '../hooks/useScrollReveal'
import './pages.css'

const lensTypes = ['Single Vision', 'Blue-Light', 'Progressive', 'Sun Tint']

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProduct(id)
  const { addToCart, toggleWishlist, inWishlist } = useShop()

  const [activeImg, setActiveImg] = useState(0)
  const [color, setColor] = useState(0)
  const [lens, setLens] = useState(0)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setActiveImg(0)
    setColor(0)
    setLens(0)
    setQty(1)
  }, [id])

  useScrollReveal([id])

  if (!product) {
    return (
      <main className="empty-state" style={{ minHeight: '50vh' }}>
        <h2>Product not found</h2>
        <p>That frame may have sold out or moved.</p>
        <Link to="/shop" className="btn btn-sage">
          Back to shop
        </Link>
      </main>
    )
  }

  const related = getRelated(product, 4)
  const saved = inWishlist(product.id)
  const save = product.oldPrice ? product.oldPrice - product.price : 0

  const handleAdd = () => {
    addToCart(product, qty)
    navigate('/cart')
  }

  return (
    <main>
      <div className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-main-img">
            <img src={product.gallery[activeImg]} alt={product.name} />
          </div>
          <div className="pdp-thumbs">
            {product.gallery.map((g, i) => (
              <button
                className={`pdp-thumb ${activeImg === i ? 'active' : ''}`}
                key={i}
                onClick={() => setActiveImg(i)}
              >
                <img src={g} alt={`${product.name} view ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="pdp-info">
          <div className="crumbs">
            <Link to="/">Home</Link> <span>/</span>
            <Link to={`/shop?cat=${product.category}`}> {product.categoryLabel}</Link>
            <span>/</span> {product.name}
          </div>

          {product.badges?.[0] && <span className="chip">{product.badges[0]}</span>}
          <h1>{product.name}</h1>

          <div className="pdp-rating">
            <span className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} fill={i < Math.round(product.rating) ? 'currentColor' : 'none'} />
              ))}
            </span>
            <span>
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="pdp-price">
            <span className="now">${product.price}</span>
            {product.oldPrice && <span className="was">${product.oldPrice}</span>}
            {save > 0 && <span className="save">Save ${save}</span>}
          </div>

          <p className="pdp-desc">{product.description}</p>

          <div className="pdp-opt">
            <span className="pdp-opt-label">Colour</span>
            <div className="pdp-colors">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  className={`pdp-color ${color === i ? 'active' : ''}`}
                  style={{ background: c }}
                  onClick={() => setColor(i)}
                  aria-label={`Colour ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="pdp-opt">
            <span className="pdp-opt-label">Lens type</span>
            <div className="pdp-lens">
              {lensTypes.map((l, i) => (
                <button
                  key={l}
                  className={lens === i ? 'active' : ''}
                  onClick={() => setLens(i)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-buy">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">
                <FiMinus />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">
                <FiPlus />
              </button>
            </div>
            <button className="btn btn-primary" onClick={handleAdd} style={{ flex: 1 }}>
              <FiShoppingBag /> Add to bag · ${product.price * qty}
            </button>
            <button
              className={`btn btn-outline ${saved ? 'active' : ''}`}
              onClick={() => toggleWishlist(product)}
              aria-label="Wishlist"
              style={saved ? { background: 'var(--sage)', borderColor: 'var(--sage)', color: '#fff' } : {}}
            >
              <FiHeart />
            </button>
          </div>

          <div className="pdp-specs">
            <div className="pdp-spec">
              <FiEye /> Shape: <strong>{product.shape}</strong>
            </div>
            <div className="pdp-spec">
              <FiShield /> Material: <strong>{product.material}</strong>
            </div>
            <div className="pdp-spec">
              <FiTruck /> <strong>Free delivery</strong> over $99
            </div>
            <div className="pdp-spec">
              <FiRefreshCcw /> <strong>30-day</strong> free returns
            </div>
          </div>
        </div>
      </div>

      <section className="related">
        <h2>You may also like</h2>
        <div className="related-grid">
          {related.map((p) => (
            <div className="reveal" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
