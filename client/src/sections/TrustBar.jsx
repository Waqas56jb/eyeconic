import { stats } from '../data/content'

export default function TrustBar() {
  return (
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
  )
}
