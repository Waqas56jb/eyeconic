import { FiStar } from 'react-icons/fi'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Loved by 180,000+</span>
          <h2 className="h-section" style={{ color: '#fff' }}>
            Kind words from <span className="accent">our customers</span>
          </h2>
        </div>

        <div className="tst-grid">
          {testimonials.map((t) => (
            <article className="tst-card reveal" key={t.name}>
              <span className="tst-quote-mark">“</span>
              <span className="stars" style={{ marginBottom: '0.8rem', display: 'inline-flex' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </span>
              <p>{t.quote}</p>
              <div className="tst-author">
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
