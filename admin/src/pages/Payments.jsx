import { useMemo, useState } from 'react'
import {
  FiDollarSign,
  FiCreditCard,
  FiClock,
  FiRefreshCcw,
  FiSearch,
  FiDownload,
} from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'
import StatusBadge from '../components/StatusBadge'

const methodIcon = (method) => {
  if (/paypal/i.test(method)) return '🅿️'
  if (/visa|master|card/i.test(method)) return '💳'
  if (/cash|cod/i.test(method)) return '💵'
  return '📱'
}

export default function Payments() {
  const { orders } = useAdmin()
  const [q, setQ] = useState('')

  // Build payments from orders.
  const payments = useMemo(
    () =>
      orders.map((o) => ({
        id: o.id.replace('EYE', 'PAY'),
        order: o.id,
        customer: o.customer,
        amount: o.total,
        method: o.method,
        date: o.date,
        status:
          o.status === 'cancelled' ? 'refunded' : o.status === 'pending' ? 'pending' : 'paid',
      })),
    [orders]
  )

  const filtered = payments.filter(
    (p) =>
      !q ||
      p.id.toLowerCase().includes(q.toLowerCase()) ||
      p.customer.name.toLowerCase().includes(q.toLowerCase())
  )

  const totalPaid = payments.filter((p) => p.status === 'paid').reduce((s, p) => s + p.amount, 0)
  const pending = payments.filter((p) => p.status === 'pending').reduce((s, p) => s + p.amount, 0)
  const refunded = payments.filter((p) => p.status === 'refunded').reduce((s, p) => s + p.amount, 0)

  const stats = [
    { icon: FiDollarSign, label: 'Total collected', value: `$${totalPaid.toLocaleString()}`, tone: 'sage' },
    { icon: FiClock, label: 'Pending', value: `$${pending.toLocaleString()}`, tone: 'amber' },
    { icon: FiRefreshCcw, label: 'Refunded', value: `$${refunded.toLocaleString()}`, tone: 'red' },
    { icon: FiCreditCard, label: 'Transactions', value: payments.length, tone: 'sage' },
  ]

  const toneStyle = {
    sage: { background: 'var(--sage-pale)', color: 'var(--sage)' },
    amber: { background: 'rgba(217,164,65,0.16)', color: '#b8860b' },
    red: { background: 'rgba(192,86,63,0.1)', color: 'var(--red)' },
  }

  return (
    <>
      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-top">
              <div className="stat-icon" style={toneStyle[s.tone]}>
                <s.icon />
              </div>
            </div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-head">
          <div className="search-box" style={{ flex: 'unset', width: 300 }}>
            <FiSearch />
            <input placeholder="Search transactions…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <button className="btn btn-outline btn-sm">
            <FiDownload /> Export CSV
          </button>
        </div>
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Order</th>
                <th>Customer</th>
                <th>Method</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td className="cell-id">{p.id}</td>
                  <td style={{ fontSize: '0.82rem' }}>{p.order}</td>
                  <td>
                    <div className="cell-prod">
                      <img src={p.customer.avatar} alt="" />
                      <strong>{p.customer.name}</strong>
                    </div>
                  </td>
                  <td style={{ fontSize: '0.82rem' }}>
                    <span style={{ marginRight: 6 }}>{methodIcon(p.method)}</span>
                    {p.method}
                  </td>
                  <td className="muted" style={{ fontSize: '0.82rem' }}>
                    {p.date}
                  </td>
                  <td>
                    <strong>${p.amount}</strong>
                  </td>
                  <td>
                    <StatusBadge status={p.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
