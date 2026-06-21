import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar, FiEye, FiTruck } from 'react-icons/fi'

const avatars = [
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/76.jpg',
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="blob hero-blob-1" />
      <div className="blob hero-blob-2" />

      <div className="hero-content reveal">
        <span className="chip">20 years of expert eyecare ✦</span>
        <h1 className="h-display">
          See the world <span className="accent">beautifully.</span>
        </h1>
        <p className="lead hero-sub">
          Premium imported frames, precision-crafted lenses and computerised eye
          testing — in our store or delivered to your door. Eyewear that feels
          as good as it looks.
        </p>

        <div className="hero-cta">
          <Link to="/shop" className="btn btn-primary">
            Shop the collection <FiArrowRight />
          </Link>
          <Link to="/about" className="btn btn-outline">
            Book an eye test
          </Link>
        </div>

        <div className="hero-trust">
          <div className="hero-avatars">
            {avatars.map((a, i) => (
              <img key={i} src={a} alt="" loading="lazy" />
            ))}
          </div>
          <div className="hero-trust-text">
            <span className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} fill="currentColor" />
              ))}
            </span>
            <strong>180,000+ happy customers</strong>
            <span>Rated 4.9 / 5 across all reviews</span>
          </div>
        </div>
      </div>

      <div className="hero-visual reveal">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80"
          alt="Eyeconic frames and eyewear collection"
          loading="eager"
        />

        <div className="hero-badge hero-badge-1 float">
          <FiEye />
          <div>
            <strong>Free eye test</strong>
            <span>In-store &amp; at home</span>
          </div>
        </div>

        <div className="hero-badge hero-badge-2 float" style={{ animationDelay: '1.2s' }}>
          <FiTruck />
          <div>
            <strong>Free delivery</strong>
            <span>On orders over $99</span>
          </div>
        </div>

        <div className="hero-rating float" style={{ animationDelay: '0.6s' }}>
          <span className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar key={i} fill="currentColor" />
            ))}
          </span>
          <strong>4.9</strong>
          <span>12,400 reviews</span>
        </div>
      </div>
    </section>
  )
}
