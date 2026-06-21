import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Toasts from './Toasts'

const META = {
  '/': { title: 'Dashboard', sub: 'Welcome back, here’s your store at a glance' },
  '/store': { title: 'Store', sub: 'Manage your product catalogue' },
  '/orders': { title: 'Orders', sub: 'Track and fulfil customer orders' },
  '/delivered': { title: 'Delivered', sub: 'Completed & delivered orders' },
  '/cancelled': { title: 'Cancelled Orders', sub: 'Cancelled & refunded orders' },
  '/payments': { title: 'Payments', sub: 'Transactions and payouts' },
  '/support': { title: 'Support', sub: 'Customer conversations & tickets' },
  '/settings': { title: 'Settings', sub: 'Store configuration & preferences' },
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const meta = META[pathname] || { title: 'Eyeconic Admin', sub: '' }

  return (
    <div className="app">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
      <div className="main">
        <Topbar title={meta.title} subtitle={meta.sub} onBurger={() => setOpen(true)} />
        <div className="page">{children}</div>
      </div>
      <Toasts />
    </div>
  )
}
