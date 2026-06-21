import { FiTruck, FiDollarSign, FiCheckCircle } from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'
import OrdersTable from '../components/OrdersTable'

export default function Delivered() {
  const { metrics } = useAdmin()
  const delivered = metrics.delivered
  const revenue = delivered.reduce((s, o) => s + o.total, 0)

  const stats = [
    { icon: FiCheckCircle, label: 'Delivered orders', value: delivered.length },
    { icon: FiDollarSign, label: 'Delivered revenue', value: `$${revenue.toLocaleString()}` },
    {
      icon: FiTruck,
      label: 'Avg. order value',
      value: delivered.length ? `$${Math.round(revenue / delivered.length)}` : '$0',
    },
  ]

  return (
    <>
      <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-top">
              <div className="stat-icon">
                <s.icon />
              </div>
            </div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <OrdersTable
        filter={(o) => o.status === 'delivered'}
        showActions={false}
        emptyText="No delivered orders yet."
      />
    </>
  )
}
