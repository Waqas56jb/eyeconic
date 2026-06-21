import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'
import { useShop } from '../context/ShopContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, inWishlist } = useShop()
  const saved = inWishlist(product.id)

  return (
    <article className="pcard card">
      <div className="pcard-media">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>

        {product.badges?.length > 0 && (
          <span className="pcard-badge chip">{product.badges[0]}</span>
        )}

        <button
          className={`pcard-wish ${saved ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Add to wishlist"
        >
          <FiHeart />
        </button>

        <button className="pcard-add" onClick={() => addToCart(product)}>
          <FiShoppingBag /> Add to bag
        </button>
      </div>

      <div className="pcard-body">
        <span className="pcard-cat">{product.categoryLabel}</span>
        <Link to={`/product/${product.id}`} className="pcard-name">
          {product.name}
        </Link>

        <div className="pcard-meta">
          <span className="pcard-rating">
            <FiStar /> {product.rating}
            <span className="muted-text"> ({product.reviews})</span>
          </span>
          <span className="pcard-colors">
            {product.colors.slice(0, 3).map((c, i) => (
              <span key={i} style={{ background: c }} />
            ))}
          </span>
        </div>

        <div className="pcard-price">
          <span className="now">${product.price}</span>
          {product.oldPrice && <span className="was">${product.oldPrice}</span>}
        </div>
      </div>
    </article>
  )
}
