import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  seedProducts,
  seedOrders,
  seedTickets,
  defaultSettings,
} from '../data/mock'

const AdminContext = createContext(null)

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export function AdminProvider({ children }) {
  const [products, setProducts] = useState(() => load('eyeconic_admin_products', seedProducts))
  const [orders, setOrders] = useState(() => load('eyeconic_admin_orders', seedOrders))
  const [tickets, setTickets] = useState(() => load('eyeconic_admin_tickets', seedTickets))
  const [settings, setSettings] = useState(() => load('eyeconic_admin_settings', defaultSettings))
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    localStorage.setItem('eyeconic_admin_products', JSON.stringify(products))
  }, [products])
  useEffect(() => {
    localStorage.setItem('eyeconic_admin_orders', JSON.stringify(orders))
  }, [orders])
  useEffect(() => {
    localStorage.setItem('eyeconic_admin_tickets', JSON.stringify(tickets))
  }, [tickets])
  useEffect(() => {
    localStorage.setItem('eyeconic_admin_settings', JSON.stringify(settings))
  }, [settings])

  // ---- toasts ----
  const toast = useCallback((text) => {
    const id = `${performance.now()}-${Math.round(performance.now() % 1000)}`
    setToasts((t) => [...t, { id, text }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800)
  }, [])

  // ---- products ----
  const addProduct = (data) => {
    const id = `${slugify(data.name) || 'product'}-${products.length + 1}`
    const product = {
      ...data,
      id,
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setProducts((p) => [product, ...p])
    toast(`“${data.name}” published to the store`)
    return product
  }

  const updateProduct = (id, data) => {
    setProducts((p) => p.map((x) => (x.id === id ? { ...x, ...data } : x)))
    toast(`“${data.name}” updated`)
  }

  const deleteProduct = (id) => {
    setProducts((p) => p.filter((x) => x.id !== id))
    toast('Product deleted')
  }

  const toggleProductStatus = (id) => {
    setProducts((p) =>
      p.map((x) =>
        x.id === id
          ? { ...x, status: x.status === 'active' ? 'draft' : 'active' }
          : x
      )
    )
  }

  // ---- orders ----
  const setOrderStatus = (id, status) => {
    setOrders((o) => o.map((x) => (x.id === id ? { ...x, status } : x)))
    toast(`Order ${id} marked ${status}`)
  }

  // ---- tickets ----
  const replyTicket = (id, text) => {
    setTickets((t) =>
      t.map((x) =>
        x.id === id
          ? {
              ...x,
              unread: false,
              messages: [...x.messages, { from: 'me', text, time: 'Just now' }],
            }
          : x
      )
    )
  }
  const markTicketRead = (id) => {
    setTickets((t) => t.map((x) => (x.id === id ? { ...x, unread: false } : x)))
  }

  const saveSettings = (data) => {
    setSettings((s) => ({ ...s, ...data }))
    toast('Settings saved')
  }

  // ---- derived metrics ----
  const metrics = useMemo(() => {
    const revenue = orders
      .filter((o) => o.status !== 'cancelled')
      .reduce((s, o) => s + o.total, 0)
    const delivered = orders.filter((o) => o.status === 'delivered')
    const cancelled = orders.filter((o) => o.status === 'cancelled')
    const active = orders.filter((o) =>
      ['processing', 'shipped', 'pending'].includes(o.status)
    )
    const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 10)
    const outStock = products.filter((p) => p.stock === 0)
    return {
      revenue,
      orderCount: orders.length,
      delivered,
      cancelled,
      active,
      productCount: products.length,
      lowStock,
      outStock,
      unreadTickets: tickets.filter((t) => t.unread).length,
    }
  }, [orders, products, tickets])

  const value = {
    products,
    orders,
    tickets,
    settings,
    metrics,
    toasts,
    toast,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleProductStatus,
    setOrderStatus,
    replyTicket,
    markTicketRead,
    saveSettings,
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export const useAdmin = () => {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider')
  return ctx
}
