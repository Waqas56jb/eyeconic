import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FiSliders, FiX } from 'react-icons/fi'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import useScrollReveal from '../hooks/useScrollReveal'
import './pages.css'

const genders = ['men', 'women', 'kids', 'unisex']

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [openFilters, setOpenFilters] = useState(false)

  const catParam = params.get('cat') || ''
  const q = (params.get('q') || '').toLowerCase()

  const [selectedCats, setSelectedCats] = useState(catParam ? [catParam] : [])
  const [selectedGenders, setSelectedGenders] = useState([])
  const [maxPrice, setMaxPrice] = useState(200)
  const [sort, setSort] = useState('featured')

  // Keep category filter in sync when arriving via a category link.
  useEffect(() => {
    setSelectedCats(catParam ? [catParam] : [])
  }, [catParam])

  useScrollReveal([selectedCats, selectedGenders, maxPrice, sort, q])

  const toggle = (list, setList, val) =>
    setList(list.includes(val) ? list.filter((v) => v !== val) : [...list, val])

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedGenders.length && !selectedGenders.includes(p.gender)) return false
      if (p.price > maxPrice) return false
      if (q && !`${p.name} ${p.categoryLabel} ${p.shape}`.toLowerCase().includes(q))
        return false
      return true
    })

    switch (sort) {
      case 'low':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'high':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [selectedCats, selectedGenders, maxPrice, sort, q])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedGenders([])
    setMaxPrice(200)
    setParams({})
  }

  const hasFilters =
    selectedCats.length || selectedGenders.length || maxPrice < 200 || q

  return (
    <main>
      <div className="page-hero">
        <div className="blob" />
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Shop
          </div>
          <h1>The Collection</h1>
          <p>
            Six hundred imported frames, precision lenses and effortless style —
            filter your way to the pair that’s unmistakably you.
          </p>
        </div>
      </div>

      <div className="shop">
        <aside className={`shop-aside ${openFilters ? 'open' : ''}`}>
          <div className="filter-block">
            <h4>Category</h4>
            {categories.map((c) => (
              <label className="filter-opt" key={c.id}>
                <input
                  type="checkbox"
                  checked={selectedCats.includes(c.id)}
                  onChange={() => toggle(selectedCats, setSelectedCats, c.id)}
                />
                {c.name}
                <span className="count">{c.count}</span>
              </label>
            ))}
          </div>

          <div className="filter-block">
            <h4>For</h4>
            {genders.map((g) => (
              <label className="filter-opt" key={g}>
                <input
                  type="checkbox"
                  checked={selectedGenders.includes(g)}
                  onChange={() => toggle(selectedGenders, setSelectedGenders, g)}
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>

          <div className="filter-block">
            <h4>Max price</h4>
            <div className="price-row">
              <input
                type="range"
                min="39"
                max="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
            <div className="price-val">Up to ${maxPrice}</div>
          </div>

          {hasFilters ? (
            <button className="btn btn-outline btn-block mt-1" onClick={clearAll}>
              Clear filters
            </button>
          ) : null}
        </aside>

        <div className="shop-main">
          <div className="shop-toolbar">
            <span className="shop-count">
              <strong>{filtered.length}</strong> products
              {q && (
                <>
                  {' '}
                  for “<strong>{q}</strong>”
                </>
              )}
            </span>
            <div className="flex gap-md" style={{ alignItems: 'center' }}>
              <button
                className="btn btn-outline filter-toggle"
                onClick={() => setOpenFilters((o) => !o)}
              >
                <FiSliders /> Filters
              </button>
              <div className="shop-sort">
                <span>Sort</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {hasFilters ? (
            <div className="active-pills">
              {selectedCats.map((c) => (
                <span
                  className="active-pill"
                  key={c}
                  onClick={() => toggle(selectedCats, setSelectedCats, c)}
                >
                  {categories.find((x) => x.id === c)?.name} <FiX />
                </span>
              ))}
              {selectedGenders.map((g) => (
                <span
                  className="active-pill"
                  key={g}
                  onClick={() => toggle(selectedGenders, setSelectedGenders, g)}
                >
                  {g} <FiX />
                </span>
              ))}
              {maxPrice < 200 && (
                <span className="active-pill" onClick={() => setMaxPrice(200)}>
                  Under ${maxPrice} <FiX />
                </span>
              )}
            </div>
          ) : null}

          {filtered.length === 0 ? (
            <div className="shop-empty">
              <h3>No frames match those filters</h3>
              <p>Try widening your price range or clearing a filter.</p>
              <button className="btn btn-sage mt-1" onClick={clearAll}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="shop-grid">
              {filtered.map((p) => (
                <div className="reveal" key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
