const MAP = {
  processing: 'badge-amber',
  pending: 'badge-grey',
  shipped: 'badge-blue',
  delivered: 'badge-green',
  cancelled: 'badge-red',
  active: 'badge-green',
  draft: 'badge-grey',
  paid: 'badge-green',
  refunded: 'badge-red',
  failed: 'badge-red',
}

export default function StatusBadge({ status }) {
  return <span className={`badge ${MAP[status] || 'badge-grey'}`}>{status}</span>
}
