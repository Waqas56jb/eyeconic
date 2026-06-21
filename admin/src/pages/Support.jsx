import { useEffect, useRef, useState } from 'react'
import { FiSend, FiSearch, FiPhone, FiMoreVertical } from 'react-icons/fi'
import { useAdmin } from '../context/AdminContext'

export default function Support() {
  const { tickets, replyTicket, markTicketRead } = useAdmin()
  const [activeId, setActiveId] = useState(tickets[0]?.id)
  const [text, setText] = useState('')
  const bodyRef = useRef(null)

  const active = tickets.find((t) => t.id === activeId) || tickets[0]

  useEffect(() => {
    if (active?.unread) markTicketRead(active.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [active?.messages.length, activeId])

  const send = (e) => {
    e.preventDefault()
    if (!text.trim() || !active) return
    replyTicket(active.id, text.trim())
    setText('')
  }

  return (
    <div className="support-grid">
      {/* Ticket list */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="card-head" style={{ padding: '1rem 1.1rem' }}>
          <div className="search-box" style={{ flex: 1 }}>
            <FiSearch />
            <input placeholder="Search tickets…" />
          </div>
        </div>
        <div className="ticket-list" style={{ padding: '0.6rem' }}>
          {tickets.map((t) => (
            <div
              key={t.id}
              className={`ticket ${activeId === t.id ? 'active' : ''}`}
              onClick={() => setActiveId(t.id)}
            >
              <img src={t.customer.avatar} alt="" />
              <div className="ticket-meta">
                <div className="t-top">
                  <strong>{t.customer.name}</strong>
                  <span className="t-time">{t.time}</span>
                </div>
                <div className="t-msg">{t.subject}</div>
              </div>
              {t.unread && (
                <span
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: 'var(--sage)',
                    alignSelf: 'center',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      {active ? (
        <div className="chat">
          <div className="chat-head">
            <img src={active.customer.avatar} alt="" />
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '0.95rem' }}>{active.customer.name}</strong>
              <div className="muted" style={{ fontSize: '0.76rem' }}>
                {active.customer.email}
              </div>
            </div>
            <button className="icon-btn" aria-label="Call">
              <FiPhone />
            </button>
            <button className="icon-btn" aria-label="More">
              <FiMoreVertical />
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            <div className="text-center muted" style={{ textAlign: 'center', fontSize: '0.74rem' }}>
              {active.subject}
            </div>
            {active.messages.map((m, i) => (
              <div key={i} className={`bubble ${m.from === 'me' ? 'me' : 'them'}`}>
                {m.text}
                <div
                  style={{
                    fontSize: '0.62rem',
                    opacity: 0.6,
                    marginTop: 4,
                    textAlign: 'right',
                  }}
                >
                  {m.time}
                </div>
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={send}>
            <input
              placeholder="Type your reply…"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="btn btn-sage">
              <FiSend /> Send
            </button>
          </form>
        </div>
      ) : (
        <div className="card empty">
          <h3>No tickets</h3>
        </div>
      )}
    </div>
  )
}
