import { FiAlertTriangle } from 'react-icons/fi'

export default function ConfirmModal({ title, message, confirmLabel = 'Confirm', onConfirm, onCancel, danger }) {
  return (
    <div className="overlay modal-center" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="stat-icon"
          style={{
            margin: '0 auto 1rem',
            width: 56,
            height: 56,
            fontSize: '1.6rem',
            background: danger ? 'rgba(192,86,63,0.12)' : 'var(--sage-pale)',
            color: danger ? 'var(--red)' : 'var(--sage)',
          }}
        >
          <FiAlertTriangle />
        </div>
        <h3>{title}</h3>
        <p>{message}</p>
        <div style={{ display: 'flex', gap: '0.7rem' }}>
          <button className="btn btn-outline btn-block" onClick={onCancel}>
            Cancel
          </button>
          <button
            className={`btn btn-block ${danger ? 'btn-danger' : 'btn-sage'}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
