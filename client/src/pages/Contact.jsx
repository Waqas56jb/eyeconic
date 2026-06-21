import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiMessageCircle,
} from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'
import './pages.css'

const cards = [
  {
    icon: FiMapPin,
    title: 'Visit our store',
    text: '42 Vision Avenue, Gulberg III, Lahore, Pakistan',
  },
  {
    icon: FiPhone,
    title: 'Call us',
    text: '+92 300 123 4567 · Mon–Sat, 10am–9pm',
  },
  {
    icon: FiMail,
    title: 'Email us',
    text: 'hello@eyeconic.com · We reply within 24 hours',
  },
  {
    icon: FiClock,
    title: 'Opening hours',
    text: 'Mon–Sat: 10am – 9pm · Sunday: 12pm – 6pm',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  useScrollReveal()

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main>
      <div className="page-hero">
        <div className="blob" />
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Contact
          </div>
          <h1>Let’s talk eyewear</h1>
          <p>
            Questions about a frame, your prescription, or booking an eye test?
            Our team is here to help — drop us a line or visit us in store.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          {cards.map((c) => (
            <div className="contact-card reveal" key={c.title}>
              <div className="icon-tile">
                <c.icon />
              </div>
              <div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            </div>
          ))}

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sage btn-block mt-1"
          >
            <FiMessageCircle /> Chat on WhatsApp
          </a>

          <div className="map-embed reveal">
            <iframe
              title="Eyeconic store location"
              src="https://www.google.com/maps?q=Gulberg%20Lahore&output=embed"
              loading="lazy"
            />
          </div>
        </div>

        <div className="contact-form reveal">
          <h2>Send us a message</h2>
          {sent && (
            <div className="form-ok">
              Thanks for reaching out — we’ll get back to you within 24 hours ✦
            </div>
          )}
          <form onSubmit={submit}>
            <div className="field-row">
              <div className="field">
                <label>Full name</label>
                <input required placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" required placeholder="jane@email.com" />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>Phone</label>
                <input placeholder="+92 300 0000000" />
              </div>
              <div className="field">
                <label>Subject</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option>Book an eye test</option>
                  <option>Order enquiry</option>
                  <option>Prescription help</option>
                  <option>Returns &amp; refunds</option>
                  <option>Something else</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea required placeholder="How can we help you?" />
            </div>
            <button type="submit" className="btn btn-primary">
              <FiSend /> Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
