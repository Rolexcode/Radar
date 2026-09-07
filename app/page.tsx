import { ecosystems, opportunities } from '../lib/data';
import { scoreOpportunity } from '../lib/scoring';

function Badge({ label }: { label: string }) {
  return <span className={`badge ${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</span>;
}

export default function Home() {
  const ranked = [...opportunities].sort((a, b) => scoreOpportunity(b) - scoreOpportunity(a));
  return (
    <main className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">ROLE-X RADAR / V2</p>
          <h1>See opportunity before registration becomes the signal.</h1>
          <p className="sub">Radar watches ecosystems, sponsors, developer activity, reusable builds and competition signals, then turns them into one action: apply, prepare, watch or skip.</p>
        </div>
        <div className="heroScore"><span>Live thesis</span><strong>Opportunity intelligence</strong><small>signal → fit → action</small></div>
      </header>

      <section>
        <div className="sectionHead"><div><p className="eyebrow">HEATING UP</p><h2>Ecosystem momentum</h2></div><p>These are signals, not predictions. Every score should be backed by evidence as collectors come online.</p></div>
        <div className="grid three">
          {ecosystems.map((e) => (
            <article className="card" key={e.name}>
              <div className="cardTop"><h3>{e.name}</h3><div className="score">{e.score}</div></div>
              <p className="trend">↑ {e.direction}</p>
              <ul>{e.evidence.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="prepare"><span>Prepare</span>{e.prepare}</div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="sectionHead"><div><p className="eyebrow">RANKED FOR YOU</p><h2>Opportunity queue</h2></div><p>The score weighs fit, effort, competition, reuse, upside and under-the-radar advantage.</p></div>
        <div className="stack">
          {ranked.map((o) => {
            const score = scoreOpportunity(o);
            return <article className="opportunity" key={o.id}>
              <div className="rank"><strong>{score}</strong><span>/100</span></div>
              <div className="opBody">
                <div className="opTitle"><div><p>{o.ecosystem} · {o.source}</p><h3>{o.title}</h3></div><Badge label={o.action} /></div>
                <p className="summary">{o.summary}</p>
                <div className="metrics">
                  <span>Fit <b>{o.fit}</b></span><span>Reuse <b>{o.reuse}</b></span><span>Upside <b>{o.upside}</b></span><span>Under radar <b>{o.underRadar}</b></span>
                </div>
                <div className="meta"><span>Deadline: {o.deadline}</span><span>Cost: {o.cost}</span><span>Reuse: {o.reuseProject ?? '—'}</span></div>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="engine">
        <p className="eyebrow">WHAT COMES NEXT</p><h2>The dashboard is only the surface.</h2>
        <div className="grid four"><div><b>01</b><h3>Collectors</h3><p>Hackathons, grants, GitHub, ecosystem blogs and sponsor history.</p></div><div><b>02</b><h3>Signals</h3><p>Momentum, recurrence, novelty and competition proxies.</p></div><div><b>03</b><h3>Personal fit</h3><p>Your skills, projects, eligibility, time and zero-cost constraint.</p></div><div><b>04</b><h3>Feedback loop</h3><p>Applied, shortlisted, won or skipped — so the ranking gets smarter.</p></div></div>
      </section>
    </main>
  );
}
