import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiArrowRight,
  FiTag,
  FiLock,
} from 'react-icons/fi'
import { useShop } from '../context/ShopContext'
import './pages.css'

export default function Cart() {
  const { cart, updateQty, removeFromCart, subtotal, clearCart } = useShop()
  const [promo, setPromo] = useState('')
  const [applied, setApplied] = useState(false)

  const discount = applied ? subtotal * 0.1 : 0
  const shipping = subtotal > 99 || subtotal === 0 ? 0 : 9
  const total = subtotal - discount + shipping

  const applyPromo = (e) => {
    e.preventDefault()
    if (promo.trim().toUpperCase() === 'EYE10') setApplied(true)
  }

  if (cart.length === 0) {
    return (
      <main>
        <div className="empty-state">
          <FiShoppingBag />
          <h2>Your bag is empty</h2>
          <p>Let’s find a pair you’ll love — explore the collection.</p>
          <Link to="/shop" className="btn btn-sage">
            Start shopping <FiArrowRight />
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
            <Link to="/">Home</Link> <span>/</span> Shopping Bag
          </div>
          <h1>Your Bag</h1>
          <p>{cart.length} item(s) ready for checkout.</p>
        </div>
      </div>

      <div className="cart">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <Link to={`/product/${item.id}`} className="cart-item-img">
                <img src={item.image} alt={item.name} />
              </Link>
              <div>
                <span className="cat">{item.categoryLabel}</span>
                <h3>
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </h3>
                <div className="cart-item-actions">
                  <div className="qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease">
                      <FiMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase">
                      <FiPlus />
                    </button>
                  </div>
                  <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>
              <div className="cart-line-price">${item.price * item.qty}</div>
            </div>
          ))}

          <div className="flex" style={{ justifyContent: 'space-between', marginTop: '1rem' }}>
            <Link to="/shop" className="btn btn-ghost">
              ← Continue shopping
            </Link>
            <button className="btn btn-ghost" onClick={clearCart}>
              Clear bag
            </button>
          </div>
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <form className="cart-promo" onSubmit={applyPromo}>
            <input
              placeholder="Promo code (try EYE10)"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
            <button type="submit" className="btn btn-outline" style={{ padding: '0.7rem 1.2rem' }}>
              <FiTag /> Apply
            </button>
          </form>
          {applied && (
            <div className="form-ok" style={{ marginBottom: '1rem' }}>
              Promo <strong>EYE10</strong> applied — 10% off!
            </div>
          )}

          <div className="sum-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="sum-row" style={{ color: 'var(--sage)' }}>
              <span>Discount (10%)</span>
              <span>−${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="sum-row">
            <span>Delivery</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="sum-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="btn btn-sage btn-block mt-2">
            <FiLock /> Secure checkout
          </button>
          <p className="muted-text" style={{ fontSize: '0.76rem', textAlign: 'center', marginTop: '0.9rem' }}>
            SSL encrypted · Stripe, PayPal &amp; local gateways
          </p>
        </aside>
      </div>
    </main>
  )
}
