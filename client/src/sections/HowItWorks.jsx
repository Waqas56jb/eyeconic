import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Simple &amp; seamless</span>
          <h2 className="h-section">
            How <span className="accent">Eyeconic</span> works
          </h2>
          <p className="lead mt-1">
            From browsing to your doorstep in four effortless steps — with expert
            care at every stage.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.no}>
              <div className="step-no">{s.no}</div>
              <div className="icon-tile">
                <s.icon />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
