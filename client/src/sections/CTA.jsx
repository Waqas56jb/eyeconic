import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-wrap reveal">
          <div className="blob cta-blob-1" />
          <div className="blob cta-blob-2" />
          <span className="eyebrow">Ready when you are</span>
          <h2>
            Book your free eye test <br />
            or <span className="accent">shop from home</span>
          </h2>
          <p>
            Visit our store, or order online and let us bring expert eyecare to
            your doorstep. Whichever you choose, you’re in good hands.
          </p>
          <div className="cta-actions">
            <Link to="/shop" className="btn btn-white">
              Shop eyewear <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
              Book an eye test
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
