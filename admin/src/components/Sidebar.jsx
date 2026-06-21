import { NavLink } from 'react-router-dom'
import {
  FiGrid,
  FiShoppingBag,
  FiPackage,
  FiTruck,
  FiXCircle,
  FiCreditCard,
  FiLifeBuoy,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'

const main = [
  { to: '/', icon: FiGrid, label: 'Dashboard', end: true },
  { to: '/store', icon: FiShoppingBag, label: 'Store', badgeKey: 'productCount' },
  { to: '/orders', icon: FiPackage, label: 'Orders', badgeKey: 'active' },
  { to: '/delivered', icon: FiTruck, label: 'Delivered', badgeKey: 'delivered' },
  { to: '/cancelled', icon: FiXCircle, label: 'Cancelled', badgeKey: 'cancelled' },
  { to: '/payments', icon: FiCreditCard, label: 'Payments' },
]
const secondary = [
  { to: '/support', icon: FiLifeBuoy, label: 'Support', badgeKey: 'unreadTickets' },
  { to: '/settings', icon: FiSettings, label: 'Settings' },
]

export default function Sidebar({ open, onClose }) {
  const { metrics } = useAdmin()

  const badgeFor = (key) => {
    if (!key) return null
    const v = metrics[key]
    const n = Array.isArray(v) ? v.length : v
    return n ? n : null
  }

  const renderItem = (item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.end}
      onClick={onClose}
      className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
    >
      <item.icon />
      {item.label}
      {badgeFor(item.badgeKey) && (
        <span className="nav-badge">{badgeFor(item.badgeKey)}</span>
      )}
    </NavLink>
  )

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-brand">
        <span className="sidebar-logo">
          Eye<span>conic</span>
        </span>
        <span className="sidebar-tag">Admin</span>
      </div>

      <div className="sidebar-section">Overview</div>
      <nav className="sidebar-nav">
        {main.map(renderItem)}
        <div className="sidebar-section" style={{ padding: '1rem 0.8rem 0.4rem' }}>
          Help &amp; Config
        </div>
        {secondary.map(renderItem)}
      </nav>

      <div className="sidebar-foot">
        <div className="sidebar-user">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Admin" />
          <div style={{ flex: 1 }}>
            <strong>Saad Ghani</strong>
            <span>Store Manager</span>
          </div>
          <FiLogOut style={{ color: 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>
    </aside>
  )
}
