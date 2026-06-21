import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { articles } from '../data/content'

export default function Articles() {
  return (
    <section className="section section-warm">
      <div className="container">
        <div className="head-row">
          <div className="section-head">
            <span className="eyebrow">The Eyeconic journal</span>
            <h2 className="h-section">
              Eyecare tips &amp; <span className="accent">style notes</span>
            </h2>
          </div>
          <Link to="/about" className="btn btn-ghost">
            Read more <FiArrowRight />
          </Link>
        </div>

        <div className="art-grid">
          {articles.map((a) => (
            <article className="art-card card reveal" key={a.id}>
              <div className="art-media">
                <img src={a.image} alt={a.title} loading="lazy" />
              </div>
              <div className="art-body">
                <span className="chip">{a.tag}</span>
                <div className="art-meta">
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.read}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <Link to="/about" className="art-link">
                  Read article <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
