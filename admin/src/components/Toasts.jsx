import { FiCheckCircle } from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'

export default function Toasts() {
  const { toasts } = useAdmin()
  if (!toasts.length) return null
  return (
    <div className="toast-wrap">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <FiCheckCircle />
          {t.text}
        </div>
      ))}
    </div>
  )
}
