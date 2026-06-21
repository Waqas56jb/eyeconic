import { useRef, useState } from 'react'
import { FiUploadCloud, FiX, FiLink, FiStar } from 'react-icons/fi'

const MAX = 4

// Reads a File into a base64 data URL so it persists without a backend.
const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

export default function ImageUploader({ images, onChange }) {
  const inputRef = useRef(null)
  const [urlMode, setUrlMode] = useState(false)
  const [url, setUrl] = useState('')

  const addImages = (imgs) => {
    onChange([...images, ...imgs].slice(0, MAX))
  }

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    const urls = await Promise.all(files.map(fileToDataUrl))
    addImages(urls)
    e.target.value = ''
  }

  const addUrl = () => {
    if (!url.trim()) return
    addImages([url.trim()])
    setUrl('')
    setUrlMode(false)
  }

  const remove = (i) => onChange(images.filter((_, idx) => idx !== i))

  const setPrimary = (i) => {
    if (i === 0) return
    const next = [...images]
    const [pick] = next.splice(i, 1)
    onChange([pick, ...next])
  }

  return (
    <>
      <div className="uploader">
        {images.map((src, i) => (
          <div className="up-slot" key={i}>
            <img src={src} alt={`Product ${i + 1}`} />
            {i === 0 && <span className="primary-tag">Cover</span>}
            <button type="button" className="rm" onClick={() => remove(i)} aria-label="Remove">
              <FiX />
            </button>
            {i !== 0 && (
              <button type="button" className="set-primary" onClick={() => setPrimary(i)}>
                <FiStar style={{ verticalAlign: -2 }} /> Set cover
              </button>
            )}
          </div>
        ))}

        {images.length < MAX && (
          <button type="button" className="up-add" onClick={() => inputRef.current?.click()}>
            <FiUploadCloud />
            Upload
            <span className="muted" style={{ fontSize: '0.62rem' }}>
              PNG / JPG
            </span>
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={handleFiles}
      />

      {images.length < MAX && (
        <div style={{ marginTop: '0.7rem' }}>
          {urlMode ? (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                className="url-input"
                style={{
                  flex: 1,
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-tile)',
                  padding: '0.6rem 0.9rem',
                  fontSize: '0.84rem',
                  outline: 'none',
                  background: 'var(--cream)',
                }}
                placeholder="https://image-url.jpg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addUrl())}
              />
              <button type="button" className="btn btn-sage btn-sm" onClick={addUrl}>
                Add
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setUrlMode(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setUrlMode(true)}
              style={{ paddingLeft: 0 }}
            >
              <FiLink /> Or paste an image URL
            </button>
          )}
        </div>
      )}
      <p className="muted" style={{ fontSize: '0.74rem', marginTop: '0.5rem' }}>
        Add up to {MAX} photos. The first image is the cover — hover others to set as cover.
      </p>
    </>
  )
}
