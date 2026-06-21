import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiHelpCircle } from 'react-icons/fi'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section-white" id="faq">
      <div className="container faq">
        <div className="faq-intro reveal">
          <span className="eyebrow">Good to know</span>
          <h2 className="h-section">
            Frequently asked <span className="accent">questions</span>
          </h2>
          <p className="lead mt-1">
            Everything you need to know about eye tests, prescriptions, delivery
            and returns. Still curious?
          </p>
          <Link to="/contact" className="btn btn-sage mt-2">
            <FiHelpCircle /> Talk to our team
          </Link>
        </div>

        <div className="faq-list reveal">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <FiPlus />
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
