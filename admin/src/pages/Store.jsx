import { useMemo, useState } from 'react'
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiPackage } from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'
import { CATEGORIES } from '../data/mock'
import ProductForm from '../components/ProductForm'
import ConfirmModal from '../components/ConfirmModal'
import StatusBadge from '../components/StatusBadge'

export default function Store() {
  const { products, addProduct, updateProduct, deleteProduct, toggleProductStatus } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [confirm, setConfirm] = useState(null)
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        if (cat !== 'All' && p.category !== cat) return false
        if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false
        return true
      }),
    [products, q, cat]
  )

  const openNew = () => {
    setEditing(null)
    setShowForm(true)
  }
  const openEdit = (p) => {
    setEditing(p)
    setShowForm(true)
  }

  const save = (data) => {
    if (editing) updateProduct(editing.id, data)
    else addProduct(data)
    setShowForm(false)
    setEditing(null)
  }

  const stockPill = (stock) => {
    if (stock === 0) return <span className="badge badge-red">Out of stock</span>
    if (stock <= 10) return <span className="badge badge-amber">Low · {stock}</span>
    return <span className="stock-pill">{stock} in stock</span>
  }

  return (
    <>
      <div className="page-head">
        <div>
          <div className="ph-title">Products</div>
          <div className="ph-sub">{products.length} products in your catalogue</div>
        </div>
        <button className="btn btn-sage" onClick={openNew}>
          <FiPlus /> Add product
        </button>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch />
          <input placeholder="Search products…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="seg">
          {['All', ...CATEGORIES].slice(0, 5).map((c) => (
            <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>
              {c === 'All' ? 'All' : c.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card empty">
          <FiPackage />
          <h3>No products found</h3>
          <p className="muted">Try a different search, or add your first product.</p>
          <button className="btn btn-sage" style={{ marginTop: '1rem' }} onClick={openNew}>
            <FiPlus /> Add product
          </button>
        </div>
      ) : (
        <div className="prod-grid">
          {filtered.map((p) => (
            <article className="prod-card" key={p.id}>
              <div className="prod-media">
                <img src={p.images[0]} alt={p.name} />
                <div className="prod-status">
                  <StatusBadge status={p.status} />
                </div>
                <div className="prod-media-actions">
                  <button onClick={() => openEdit(p)} title="Edit">
                    <FiEdit2 />
                  </button>
                  <button
                    className="del"
                    onClick={() => setConfirm(p)}
                    title="Delete"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
              <div className="prod-info">
                <span className="cat">{p.category}</span>
                <h4>{p.name}</h4>
                <div className="price-row">
                  <span className="price">
                    ${p.price}
                    {p.oldPrice && <span className="was">${p.oldPrice}</span>}
                  </span>
                  {stockPill(p.stock)}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '0.9rem',
                    paddingTop: '0.8rem',
                    borderTop: '1px solid var(--border-soft)',
                  }}
                >
                  <span
                    className="muted"
                    style={{ fontSize: '0.76rem', cursor: 'pointer' }}
                    onClick={() => toggleProductStatus(p.id)}
                  >
                    Toggle visibility
                  </span>
                  <div
                    className={`switch ${p.status === 'active' ? 'on' : ''}`}
                    onClick={() => toggleProductStatus(p.id)}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {showForm && (
        <ProductForm
          initial={editing}
          onSave={save}
          onClose={() => {
            setShowForm(false)
            setEditing(null)
          }}
        />
      )}

      {confirm && (
        <ConfirmModal
          danger
          title="Delete product?"
          message={`“${confirm.name}” will be removed from your store. This cannot be undone.`}
          confirmLabel="Delete"
          onConfirm={() => {
            deleteProduct(confirm.id)
            setConfirm(null)
          }}
          onCancel={() => setConfirm(null)}
        />
      )}
    </>
  )
}
