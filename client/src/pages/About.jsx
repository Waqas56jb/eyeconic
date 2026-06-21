import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { services, whyFeatures, stats } from '../data/content'
import useScrollReveal from '../hooks/useScrollReveal'
import '../sections/home.css'
import './pages.css'

export default function About() {
  useScrollReveal()

  return (
    <main>
      <div className="page-hero">
        <div className="blob" />
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Services
          </div>
          <h1>Caring for your vision since 2006</h1>
          <p>
            Two decades, one mission — to give every customer eyewear that fits
            beautifully and vision they can trust. From eye testing to lens
            crafting and home delivery, we do it all under one roof.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section section-white">
        <div className="container about-grid">
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80"
              alt="Eyeconic optometrist at work"
              loading="lazy"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2 className="h-section">
              A family of opticians, <span className="accent">obsessed with detail</span>
            </h2>
            <p className="lead mt-1">
              Eyeconic began as a single neighbourhood optical store in 2006. Two
              decades on, we’ve tested over a million eyes, crafted countless
              lenses in our own lab, and curated a collection of imported frames
              loved by 180,000+ customers.
            </p>
            <p className="lead mt-1">
              What hasn’t changed is the care. Every frame is hand-checked, every
              lens cut to precision, and every customer treated like family —
              whether you visit our store or order from your sofa.
            </p>
            <Link to="/shop" className="btn btn-primary mt-2">
              Shop the collection <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark trustbar">
        <div className="container trustbar-grid">
          {stats.map((s) => (
            <div className="trust-stat reveal" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What we offer</span>
            <h2 className="h-section">
              Everything for your <span className="accent">eyes</span>
            </h2>
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

      {/* Values */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our promise</span>
            <h2 className="h-section">
              Why people <span className="accent">trust us</span>
            </h2>
          </div>
          <div className="about-values">
            {whyFeatures.slice(0, 3).map((f) => (
              <div className="about-value reveal" key={f.title}>
                <div className="icon-tile">
                  <f.icon />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-wrap reveal">
            <div className="blob cta-blob-1" />
            <div className="blob cta-blob-2" />
            <span className="eyebrow">Come see us</span>
            <h2>
              Book a <span className="accent">free eye test</span> today
            </h2>
            <p>
              Visit our store or request a home visit — our certified
              optometrists and state-of-the-art machines are ready for you.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">
                Book an appointment <FiArrowRight />
              </Link>
              <Link to="/shop" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                Browse eyewear
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
