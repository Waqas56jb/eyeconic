import { FiMenu, FiSearch, FiBell, FiMail, FiExternalLink } from 'react-icons/fi'

export default function Topbar({ title, subtitle, onBurger }) {
  return (
    <header className="topbar">
      <button className="burger" onClick={onBurger} aria-label="Menu">
        <FiMenu />
      </button>
      <div className="topbar-title">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="topbar-search">
        <FiSearch />
        <input placeholder="Search anything…" />
      </div>

      <a
        className="icon-btn"
        href="http://localhost:5173"
        target="_blank"
        rel="noreferrer"
        title="View storefront"
      >
        <FiExternalLink />
      </a>
      <button className="icon-btn" aria-label="Messages">
        <FiMail />
        <i />
      </button>
      <button className="icon-btn" aria-label="Notifications">
        <FiBell />
        <i />
      </button>
    </header>
  )
}
