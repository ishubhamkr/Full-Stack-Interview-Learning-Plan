export default function Hero({ totalDays, totalQuestions, completedCount }) {
  const pct = totalDays ? Math.round((completedCount / totalDays) * 100) : 0;

  return (
    <div className="hero">
      <div className="hero-eyebrow">
        <span className="eyebrow-dot" />
        21-Day Interview Prep
      </div>

      <h1>Full-Stack Mastery</h1>

      <p className="hero-desc">
        A comprehensive 21-day roadmap — Java Core through Spring Boot &amp; DevOps (Days 1–10),
        React &amp; Testing (Days 11–16), GraphQL &amp; Full-Stack Integration (Days 17–20),
        and Apache Kafka &amp; Distributed Messaging (Day 21). Every day has curated interview
        questions with detailed answers, code examples, and a dedicated study plan.
      </p>

      <div className="hero-tracks">
        <span className="track-badge java">Java &amp; Spring Boot · Days 1–10</span>
        <span className="track-badge react">React &amp; Testing · Days 11–16</span>
        <span className="track-badge graphql">GraphQL &amp; Full-Stack · Days 17–20</span>
        <span className="track-badge kafka">Apache Kafka · Day 21</span>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">{totalDays}</span>
          <span className="stat-label">Days</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{totalQuestions}</span>
          <span className="stat-label">Questions</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">40+</span>
          <span className="stat-label">Topics</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{completedCount}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="progress-card">
          <div className="progress-label">
            <span>Overall Progress</span>
            <strong>{pct}%</strong>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
