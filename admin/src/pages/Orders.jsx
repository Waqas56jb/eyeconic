import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'
import OrdersTable from '../components/OrdersTable'

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'pending', label: 'Pending' },
  { id: 'processing', label: 'Processing' },
  { id: 'shipped', label: 'Shipped' },
]

export default function Orders() {
  const { orders } = useAdmin()
  const [tab, setTab] = useState('all')

  const count = (id) =>
    id === 'all'
      ? orders.filter((o) => o.status !== 'delivered' && o.status !== 'cancelled').length
      : orders.filter((o) => o.status === id).length

  const filter =
    tab === 'all'
      ? (o) => o.status !== 'delivered' && o.status !== 'cancelled'
      : (o) => o.status === tab

  return (
    <>
      <div className="toolbar">
        <div className="seg">
          {TABS.map((t) => (
            <button key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => setTab(t.id)}>
              {t.label} ({count(t.id)})
            </button>
          ))}
        </div>
      </div>
      <OrdersTable filter={filter} emptyText="No active orders in this view." />
    </>
  )
}
