import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiTruck,
  FiShield,
  FiRefreshCcw,
  FiCreditCard,
} from 'react-icons/fi'
import { footerLinks } from '../data/content'
import './Footer.css'

const perks = [
  { icon: FiTruck, t: 'Free Delivery', s: 'On orders over $99' },
  { icon: FiRefreshCcw, t: '30-Day Returns', s: 'Hassle-free refunds' },
  { icon: FiShield, t: '2-Year Warranty', s: 'Frames & lenses' },
  { icon: FiCreditCard, t: 'Secure Payments', s: 'SSL encrypted' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const subscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 3500)
  }

  return (
    <footer className="footer">
      <div className="footer-perks">
        {perks.map((p) => (
          <div className="footer-perk" key={p.t}>
            <p.icon />
            <div>
              <strong>{p.t}</strong>
              <span>{p.s}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Eye<span>conic</span>
          </Link>
          <p>
            Twenty years of expert eyecare. Premium imported frames, precision
            lens crafting, computerised eye testing and home delivery — so you
            always see the world beautifully.
          </p>

          <div className="footer-contact">
            <span>
              <FiMapPin /> 42 Vision Avenue, Gulberg, Lahore
            </span>
            <span>
              <FiPhone /> +92 300 123 4567
            </span>
            <span>
              <FiMail /> hello@eyeconic.com
            </span>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </div>

        <div className="footer-cols">
          {Object.entries(footerLinks).map(([title, items]) => (
            <div className="footer-col" key={title}>
              <h4>{title}</h4>
              <ul>
                {items.map((it) => (
                  <li key={it.label}>
                    <Link to={it.to}>{it.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-news">
          <h4>Join the list</h4>
          <p>
            Get early access to new collections, eyecare tips and members-only
            offers.
          </p>
          <form onSubmit={subscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
            />
            <button type="submit" aria-label="Subscribe">
              <FiSend />
            </button>
          </form>
          {done && <span className="footer-news-ok">Thanks — you’re subscribed ✦</span>}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Eyeconic. All rights reserved.</span>
        <span className="footer-bottom-links">
          <Link to="/about">Privacy</Link>
          <Link to="/about">Terms</Link>
          <Link to="/contact">Returns & Refunds</Link>
        </span>
      </div>
    </footer>
  )
}
