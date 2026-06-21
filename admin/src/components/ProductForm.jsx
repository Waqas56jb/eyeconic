import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { CATEGORIES, MATERIALS, SHAPES, FEATURES, BADGES } from '../data/mock'
import ImageUploader from './ImageUploader'

const empty = {
  name: '',
  category: CATEGORIES[0],
  gender: 'Unisex',
  price: '',
  oldPrice: '',
  stock: '',
  material: MATERIALS[0],
  shape: SHAPES[0],
  badge: 'None',
  features: [],
  status: 'active',
  images: [],
  description: '',
}

export default function ProductForm({ initial, onSave, onClose }) {
  const [form, setForm] = useState(() => ({ ...empty, ...initial }))
  const [errors, setErrors] = useState({})
  const editing = Boolean(initial?.id)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const toggleFeature = (feat) =>
    setForm((f) => ({
      ...f,
      features: f.features.includes(feat)
        ? f.features.filter((x) => x !== feat)
        : [...f.features, feat],
    }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Product name is required'
    if (form.price === '' || Number(form.price) <= 0) e.price = 'Enter a valid price'
    if (form.stock === '' || Number(form.stock) < 0) e.stock = 'Enter stock quantity'
    if (!form.images.length) e.images = 'Add at least one photo'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (!validate()) return
    onSave({
      ...form,
      price: Number(form.price),
      oldPrice: form.oldPrice === '' ? null : Number(form.oldPrice),
      stock: Number(form.stock),
    })
  }

  return (
    <div className="overlay" onClick={onClose}>
      <form className="drawer" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="drawer-head">
          <div>
            <h2>{editing ? 'Edit product' : 'Add new product'}</h2>
            <p>{editing ? 'Update the details below' : 'Create a product for your storefront'}</p>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </div>

        <div className="drawer-body">
          {/* Images */}
          <div className="field">
            <label>Product photos</label>
            <ImageUploader images={form.images} onChange={(imgs) => set('images', imgs)} />
            {errors.images && <div className="err">{errors.images}</div>}
          </div>

          {/* Name */}
          <div className="field">
            <label>Product name</label>
            <input
              placeholder="e.g. Aria Round"
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
            />
            {errors.name && <div className="err">{errors.name}</div>}
          </div>

          {/* Category + gender */}
          <div className="field-row">
            <div className="field">
              <label>Category</label>
              <select value={form.category} onChange={(e) => set('category', e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>For</label>
              <select value={form.gender} onChange={(e) => set('gender', e.target.value)}>
                {['Men', 'Women', 'Unisex', 'Kids'].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price + compare + stock */}
          <div className="field-row-3">
            <div className="field">
              <label>Price</label>
              <div className="input-prefix">
                <span>$</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="129"
                  value={form.price}
                  onChange={(e) => set('price', e.target.value)}
                />
              </div>
              {errors.price && <div className="err">{errors.price}</div>}
            </div>
            <div className="field">
              <label>
                Compare<span className="opt">(opt)</span>
              </label>
              <div className="input-prefix">
                <span>$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="169"
                  value={form.oldPrice ?? ''}
                  onChange={(e) => set('oldPrice', e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label>Stock</label>
              <input
                type="number"
                min="0"
                placeholder="40"
                value={form.stock}
                onChange={(e) => set('stock', e.target.value)}
              />
              {errors.stock && <div className="err">{errors.stock}</div>}
            </div>
          </div>

          {/* Material + shape */}
          <div className="field-row">
            <div className="field">
              <label>Material</label>
              <select value={form.material} onChange={(e) => set('material', e.target.value)}>
                {MATERIALS.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Shape</label>
              <select value={form.shape} onChange={(e) => set('shape', e.target.value)}>
                {SHAPES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Badge */}
          <div className="field">
            <label>
              Badge<span className="opt">(optional)</span>
            </label>
            <select value={form.badge} onChange={(e) => set('badge', e.target.value)}>
              {BADGES.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Features */}
          <div className="field">
            <label>
              Features<span className="opt">(select any)</span>
            </label>
            <div className="chips">
              {FEATURES.map((f) => (
                <button
                  type="button"
                  key={f}
                  className={`chip-toggle ${form.features.includes(f) ? 'on' : ''}`}
                  onClick={() => toggleFeature(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="field">
            <label>
              Description<span className="opt">(optional)</span>
            </label>
            <textarea
              placeholder="Describe the frame, materials, fit and lens options…"
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
            />
          </div>

          {/* Status */}
          <div className="field">
            <label>Visibility</label>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}
              onClick={() => set('status', form.status === 'active' ? 'draft' : 'active')}
            >
              <div className={`switch ${form.status === 'active' ? 'on' : ''}`} />
              <div>
                <strong style={{ fontSize: '0.86rem' }}>
                  {form.status === 'active' ? 'Active — visible on storefront' : 'Draft — hidden'}
                </strong>
                <div className="muted" style={{ fontSize: '0.76rem' }}>
                  Active products appear on the Eyeconic website
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-foot">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-sage" style={{ flex: 1 }}>
            {editing ? 'Save changes' : 'Publish product'}
          </button>
        </div>
      </form>
    </div>
  )
}
