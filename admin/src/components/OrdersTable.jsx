import { useMemo, useState } from 'react'
import { FiSearch, FiPackage, FiEye } from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'
import StatusBadge from './StatusBadge'

const NEXT = {
  pending: 'processing',
  processing: 'shipped',
  shipped: 'delivered',
}
const NEXT_LABEL = {
  pending: 'Accept',
  processing: 'Mark shipped',
  shipped: 'Mark delivered',
}

export default function OrdersTable({ filter, showActions = true, emptyText = 'No orders here yet' }) {
  const { orders, setOrderStatus } = useAdmin()
  const [q, setQ] = useState('')

  const list = useMemo(() => {
    let l = filter ? orders.filter(filter) : orders
    if (q) {
      const s = q.toLowerCase()
      l = l.filter(
        (o) =>
          o.id.toLowerCase().includes(s) ||
          o.customer.name.toLowerCase().includes(s) ||
          o.items.toLowerCase().includes(s)
      )
    }
    return l
  }, [orders, filter, q])

  return (
    <div className="card">
      <div className="card-head">
        <div className="search-box" style={{ flex: 'unset', width: 300, minWidth: 0 }}>
          <FiSearch />
          <input placeholder="Search orders…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <span className="muted" style={{ fontSize: '0.82rem' }}>
          {list.length} order(s)
        </span>
      </div>

      {list.length === 0 ? (
        <div className="empty">
          <FiPackage />
          <h3>Nothing to show</h3>
          <p className="muted">{emptyText}</p>
        </div>
      ) : (
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Date</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                {showActions && <th style={{ textAlign: 'right' }}>Action</th>}
              </tr>
            </thead>
            <tbody>
              {list.map((o) => (
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
                  <td style={{ maxWidth: 200 }}>
                    <span style={{ fontSize: '0.83rem' }}>{o.items}</span>
                    <div className="muted" style={{ fontSize: '0.74rem' }}>
                      Qty {o.qty}
                    </div>
                  </td>
                  <td className="muted" style={{ fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                    {o.date}
                  </td>
                  <td>
                    <strong>${o.total}</strong>
                  </td>
                  <td style={{ fontSize: '0.8rem' }}>{o.method}</td>
                  <td>
                    <StatusBadge status={o.status} />
                  </td>
                  {showActions && (
                    <td>
                      <div className="row-actions">
                        {NEXT[o.status] && (
                          <button
                            className="btn btn-sage btn-sm"
                            style={{ width: 'auto', padding: '0.4rem 0.7rem' }}
                            onClick={() => setOrderStatus(o.id, NEXT[o.status])}
                          >
                            {NEXT_LABEL[o.status]}
                          </button>
                        )}
                        {['pending', 'processing'].includes(o.status) && (
                          <button
                            className="del"
                            title="Cancel order"
                            onClick={() => setOrderStatus(o.id, 'cancelled')}
                          >
                            <FiPackage />
                          </button>
                        )}
                        {!NEXT[o.status] && !['pending', 'processing'].includes(o.status) && (
                          <button title="View"><FiEye /></button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
