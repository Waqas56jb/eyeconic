import { FiXCircle, FiDollarSign, FiRotateCcw } from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'
import OrdersTable from '../components/OrdersTable'

export default function Cancelled() {
  const { metrics } = useAdmin()
  const cancelled = metrics.cancelled
  const lost = cancelled.reduce((s, o) => s + o.total, 0)
  const rate = metrics.orderCount
    ? ((cancelled.length / metrics.orderCount) * 100).toFixed(1)
    : 0

  const stats = [
    { icon: FiXCircle, label: 'Cancelled orders', value: cancelled.length },
    { icon: FiDollarSign, label: 'Value lost', value: `$${lost.toLocaleString()}` },
    { icon: FiRotateCcw, label: 'Cancellation rate', value: `${rate}%` },
  ]

  return (
    <>
      <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-top">
              <div
                className="stat-icon"
                style={{ background: 'rgba(192,86,63,0.1)', color: 'var(--red)' }}
              >
                <s.icon />
              </div>
            </div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <OrdersTable
        filter={(o) => o.status === 'cancelled'}
        showActions={false}
        emptyText="No cancelled orders — great work!"
      />
    </>
  )
}
