import { useState } from 'react'
import {
  FiHome,
  FiBell,
  FiCreditCard,
  FiTruck,
  FiSave,
} from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'

const TABS = [
  { id: 'store', label: 'Store Profile', icon: FiHome },
  { id: 'shipping', label: 'Shipping & Tax', icon: FiTruck },
  { id: 'payments', label: 'Payments', icon: FiCreditCard },
  { id: 'notifications', label: 'Notifications', icon: FiBell },
]

export default function Settings() {
  const { settings, saveSettings } = useAdmin()
  const [tab, setTab] = useState('store')
  const [form, setForm] = useState(settings)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const Toggle = ({ k, label, desc }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.9rem 0',
        borderBottom: '1px solid var(--border-soft)',
        cursor: 'pointer',
      }}
      onClick={() => set(k, !form[k])}
    >
      <div style={{ flex: 1 }}>
        <strong style={{ fontSize: '0.9rem' }}>{label}</strong>
        <div className="muted" style={{ fontSize: '0.8rem' }}>
          {desc}
        </div>
      </div>
      <div className={`switch ${form[k] ? 'on' : ''}`} />
    </div>
  )

  return (
    <div className="settings-grid">
      <div className="card card-pad settings-nav" style={{ height: 'fit-content' }}>
        {TABS.map((t) => (
          <button key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => setTab(t.id)}>
            <t.icon /> {t.label}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-head">
          <h3>{TABS.find((t) => t.id === tab).label}</h3>
          <button className="btn btn-sage btn-sm" onClick={() => saveSettings(form)}>
            <FiSave /> Save changes
          </button>
        </div>
        <div className="card-pad">
          {tab === 'store' && (
            <>
              <div className="field">
                <label>Store name</label>
                <input value={form.storeName} onChange={(e) => set('storeName', e.target.value)} />
              </div>
              <div className="field">
                <label>Tagline</label>
                <input value={form.tagline} onChange={(e) => set('tagline', e.target.value)} />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Support email</label>
                  <input value={form.email} onChange={(e) => set('email', e.target.value)} />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label>Store address</label>
                <input value={form.address} onChange={(e) => set('address', e.target.value)} />
              </div>
              <div className="field">
                <label>Currency</label>
                <select value={form.currency} onChange={(e) => set('currency', e.target.value)}>
                  <option>USD ($)</option>
                  <option>PKR (₨)</option>
                  <option>GBP (£)</option>
                  <option>EUR (€)</option>
                </select>
              </div>
            </>
          )}

          {tab === 'shipping' && (
            <>
              <div className="field">
                <label>Free shipping threshold</label>
                <div className="input-prefix">
                  <span>$</span>
                  <input
                    type="number"
                    value={form.freeShipThreshold}
                    onChange={(e) => set('freeShipThreshold', Number(e.target.value))}
                  />
                </div>
                <p className="muted" style={{ fontSize: '0.78rem', marginTop: '0.4rem' }}>
                  Orders above this amount ship for free.
                </p>
              </div>
              <div className="field">
                <label>Tax rate (%)</label>
                <input
                  type="number"
                  value={form.taxRate}
                  onChange={(e) => set('taxRate', Number(e.target.value))}
                />
              </div>
            </>
          )}

          {tab === 'payments' && (
            <>
              <Toggle k="codEnabled" label="Cash on Delivery" desc="Let customers pay on delivery" />
              <Toggle k="stripeEnabled" label="Stripe (cards)" desc="Visa, Mastercard, Amex" />
              <Toggle k="paypalEnabled" label="PayPal" desc="Accept PayPal payments" />
              <p className="muted" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                Payment gateway keys are configured on the backend (coming soon).
              </p>
            </>
          )}

          {tab === 'notifications' && (
            <>
              <Toggle k="notifyOrders" label="New order alerts" desc="Email me when an order is placed" />
              <Toggle k="notifyStock" label="Low-stock alerts" desc="Warn me when stock runs low" />
              <Toggle k="notifyReviews" label="New review alerts" desc="Notify me about new reviews" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
