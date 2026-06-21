import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { prescriptionSteps } from '../data/content'

export default function PrescriptionBanner() {
  return (
    <section className="section">
      <div className="container rx reveal">
        <div className="rx-text">
          <span className="eyebrow">Prescription made easy</span>
          <h2 className="h-section">
            Your prescription, <span className="accent">handled</span>
          </h2>
          <p className="lead mt-1">
            Adding your prescription takes seconds. Upload it, type it in, or let
            our optometrists test you — we verify every detail before crafting
            your lenses.
          </p>

          <div className="rx-steps">
            {prescriptionSteps.map((s) => (
              <div className="rx-step" key={s.title}>
                <div className="icon-tile">
                  <s.icon />
                </div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn btn-sage mt-2">
            Learn about lenses <FiArrowRight />
          </Link>
        </div>

        <div className="rx-visual">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
            alt="Optometrist performing an eye test"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
