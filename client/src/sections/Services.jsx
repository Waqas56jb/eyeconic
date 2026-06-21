import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { services } from '../data/content'

export default function Services() {
  return (
    <section className="section section-warm">
      <div className="container">
        <div className="head-row">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 className="h-section">
              Complete <span className="accent">eyecare</span>, end to end
            </h2>
          </div>
          <Link to="/about" className="btn btn-ghost">
            All services <FiArrowRight />
          </Link>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc-card reveal" key={s.title}>
              <img src={s.image} alt={s.title} loading="lazy" />
              <div className="svc-body">
                <div className="icon-tile">
                  <s.icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
