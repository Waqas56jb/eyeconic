import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiPhone,
} from 'react-icons/fi'
import { useShop } from '../context/ShopContext'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const { cartCount, wishlist } = useShop()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const submitSearch = (e) => {
    e.preventDefault()
    navigate(`/shop?q=${encodeURIComponent(q.trim())}`)
    setOpen(false)
  }

  return (
    <>
      <div className="topbar">
        <span>
          <FiPhone /> Book a free eye test · Home delivery on orders over $99
        </span>
        <span className="topbar-right">
          <span className="live-dot" /> Optometrists online now
        </span>
      </div>

      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          Eye<span>conic</span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <form className="nav-search" onSubmit={submitSearch}>
          <FiSearch />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search frames, sunglasses…"
          />
        </form>

        <div className="nav-actions">
          <Link to="/contact" className="nav-icon" aria-label="Account">
            <FiUser />
          </Link>
          <Link to="/wishlist" className="nav-icon" aria-label="Wishlist">
            <FiHeart />
            {wishlist.length > 0 && <i>{wishlist.length}</i>}
          </Link>
          <Link to="/cart" className="nav-icon" aria-label="Cart">
            <FiShoppingBag />
            {cartCount > 0 && <i>{cartCount}</i>}
          </Link>
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer ${open ? 'open' : ''}`}>
        <form className="drawer-search" onSubmit={submitSearch}>
          <FiSearch />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search eyewear…"
          />
        </form>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            className="drawer-link"
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/shop" className="btn btn-sage btn-block mt-1" onClick={() => setOpen(false)}>
          Shop all eyewear
        </Link>
      </div>
      {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
    </>
  )
}
