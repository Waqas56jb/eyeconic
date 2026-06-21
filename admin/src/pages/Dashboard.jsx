import { Link } from 'react-router-dom'
import {
  FiDollarSign,
  FiPackage,
  FiTruck,
  FiShoppingBag,
  FiArrowUpRight,
  FiArrowDownRight,
  FiAlertCircle,
  FiArrowRight,
} from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'
import StatusBadge from '../components/StatusBadge'
import { salesChart } from '../data/mock'

export default function Dashboard() {
  const { metrics, orders, products } = useAdmin()

  const stats = [
    {
      icon: FiDollarSign,
      label: 'Total Revenue',
      value: `$${metrics.revenue.toLocaleString()}`,
      trend: 12.4,
      up: true,
    },
    {
      icon: FiShoppingBag,
      label: 'Total Orders',
      value: metrics.orderCount,
      trend: 8.1,
      up: true,
    },
    {
      icon: FiTruck,
      label: 'Delivered',
      value: metrics.delivered.length,
      trend: 5.3,
      up: true,
    },
    {
      icon: FiPackage,
      label: 'Active Products',
      value: metrics.productCount,
      trend: 2.0,
      up: false,
    },
  ]

  const recent = orders.slice(0, 6)
  const topProducts = [...products].sort((a, b) => b.stock - a.stock).slice(0, 4)

  return (
    <>
      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-top">
              <div className="stat-icon">
                <s.icon />
              </div>
              <span className={`stat-trend ${s.up ? 'up' : 'down'}`}>
                {s.up ? <FiArrowUpRight /> : <FiArrowDownRight />}
                {s.trend}%
              </span>
            </div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-2-1" style={{ marginBottom: '1.5rem' }}>
        {/* Sales chart */}
        <div className="card">
          <div className="card-head">
            <div>
              <h3>Sales Overview</h3>
              <p>Revenue performance this week</p>
            </div>
            <span className="badge badge-sage">+12.4% vs last week</span>
          </div>
          <div className="card-pad">
            <div className="chart">
              {salesChart.map((d) => (
                <div className="bar-col" key={d.label}>
                  <div className="bar" style={{ height: `${d.value}%` }} title={`${d.value}%`} />
                  <span className="bar-label">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts / inventory */}
        <div className="card">
          <div className="card-head">
            <h3>Inventory Alerts</h3>
          </div>
          <div className="card-pad" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <AlertRow
              tone="red"
              icon={FiAlertCircle}
              title={`${metrics.outStock.length} out of stock`}
              sub="Restock to keep selling"
            />
            <AlertRow
              tone="amber"
              icon={FiPackage}
              title={`${metrics.lowStock.length} low on stock`}
              sub="10 units or fewer remaining"
            />
            <AlertRow
              tone="green"
              icon={FiShoppingBag}
              title={`${metrics.active.length} orders to fulfil`}
              sub="Processing, pending & shipped"
            />
            <Link to="/store" className="btn btn-outline btn-block" style={{ marginTop: '0.4rem' }}>
              Manage inventory <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-2-1">
        {/* Recent orders */}
        <div className="card">
          <div className="card-head">
            <h3>Recent Orders</h3>
            <Link to="/orders" className="btn btn-ghost btn-sm">
              View all <FiArrowRight />
            </Link>
          </div>
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((o) => (
                  <tr key={o.id}>
                    <td className="cell-id">{o.id}</td>
                    <td>
                      <div className="cell-prod">
                        <img src={o.customer.avatar} alt="" />
                        <div>
                          <strong>{o.customer.name}</strong>
                          <span>{o.city}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <strong>${o.total}</strong>
                    </td>
                    <td>
                      <StatusBadge status={o.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top products */}
        <div className="card">
          <div className="card-head">
            <h3>Top Stocked</h3>
          </div>
          <div className="card-pad" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topProducts.map((p) => (
              <div key={p.id} className="cell-prod">
                <img src={p.images[0]} alt={p.name} />
                <div style={{ flex: 1 }}>
                  <strong>{p.name}</strong>
                  <span>${p.price} · {p.stock} in stock</span>
                </div>
                <StatusBadge status={p.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function AlertRow({ tone, icon: Icon, title, sub }) {
  const bg = {
    red: 'rgba(192,86,63,0.1)',
    amber: 'rgba(217,164,65,0.14)',
    green: 'rgba(76,175,80,0.12)',
  }[tone]
  const color = { red: 'var(--red)', amber: '#b8860b', green: 'var(--green)' }[tone]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
      <div
        className="stat-icon"
        style={{ width: 40, height: 40, fontSize: '1.1rem', background: bg, color }}
      >
        <Icon />
      </div>
      <div>
        <strong style={{ fontSize: '0.9rem' }}>{title}</strong>
        <div className="muted" style={{ fontSize: '0.78rem' }}>
          {sub}
        </div>
      </div>
    </div>
  )
}
