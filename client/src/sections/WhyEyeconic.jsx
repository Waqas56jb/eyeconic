import { FiAward } from 'react-icons/fi'
import { whyFeatures } from '../data/content'

export default function WhyEyeconic() {
  return (
    <section className="section section-white">
      <div className="container why">
        <div className="why-visual reveal">
          <img
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80"
            alt="Inside an Eyeconic store"
            loading="lazy"
          />
          <div className="why-float float">
            <div className="icon-tile">
              <FiAward />
            </div>
            <div>
              <strong>20 yrs</strong>
              <span>Trusted expertise in eyecare</span>
            </div>
          </div>
        </div>

        <div className="why-text reveal">
          <span className="eyebrow">Why Eyeconic</span>
          <h2 className="h-section">
            Two decades of caring for the way you{' '}
            <span className="accent">see</span>
          </h2>
          <p className="lead mt-1">
            We’ve spent twenty years perfecting the craft of eyewear — from
            sourcing the finest imported frames to cutting every lens in our own
            precision lab. The result is eyewear you can trust, on every level.
          </p>

          <div className="why-features">
            {whyFeatures.map((f) => (
              <div className="why-feature" key={f.title}>
                <div className="icon-tile">
                  <f.icon />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
