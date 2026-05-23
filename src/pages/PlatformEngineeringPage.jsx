import { useState, useCallback, useMemo } from 'react';
import { PLATFORM_PLAN, PLATFORM_PREREQUISITES, PLATFORM_SUMMARY } from '../data/platformEngineeringData';

/* ── helpers ── */
function getCheckKey(day, sectionIdx, itemIdx) {
  return `pe_d${day}_s${sectionIdx}_i${itemIdx}`;
}
function getHandsonKey(day) {
  return `pe_handson_d${day}`;
}

function loadChecked() {
  try {
    const raw = localStorage.getItem('pe_checked');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveChecked(obj) {
  localStorage.setItem('pe_checked', JSON.stringify(obj));
}

const DOC_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#60a5fa" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-7-7H8v-2h3v2zm5 3H8v-2h8v2zm0-6H8V8h8v2z"/>
  </svg>
);

function SectionBlock({ day, sectionIdx, section, checked, onToggle }) {
  return (
    <div className="pe-section">
      <div className="pe-section-header">
        <span className="pe-section-emoji">{section.emoji}</span>
        <span className="pe-section-name">{section.name}</span>
      </div>
      <ul className="pe-item-list">
        {section.items.map((item, itemIdx) => {
          const k = getCheckKey(day, sectionIdx, itemIdx);
          return (
            <li
              key={k}
              className={`pe-item${checked[k] ? ' pe-item--done' : ''}`}
              onClick={() => onToggle(k)}
            >
              <span className="pe-item-checkbox">
                {checked[k] ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : null}
              </span>
              <span className="pe-item-text">{item}</span>
            </li>
          );
        })}
      </ul>
      {section.resources.length > 0 && (
        <div className="pe-resources">
          <span className="pe-resources-label">Resources:</span>
          {section.resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ip-link ip-link-doc"
              onClick={(e) => e.stopPropagation()}
            >
              {DOC_SVG} {r.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function DayCard({ dayNum, checked, onToggle }) {
  const day = PLATFORM_PLAN[dayNum];
  if (!day) return null;
  const handsonKey = getHandsonKey(dayNum);
  const handsonDone = !!checked[handsonKey];

  /* total items for this day */
  const totalItems = day.sections.reduce((sum, s) => sum + s.items.length, 0) + 1; /* +1 for hands-on */
  let doneItems = 0;
  day.sections.forEach((s, si) => {
    s.items.forEach((_, ii) => {
      if (checked[getCheckKey(dayNum, si, ii)]) doneItems++;
    });
  });
  if (handsonDone) doneItems++;
  const pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <div className="pe-day-card">
      {/* Header */}
      <div className="pe-day-header">
        <div className="pe-day-number-badge">Day {dayNum}</div>
        <div className="pe-day-meta">
          <h2 className="pe-day-title">{day.title}</h2>
          <p className="pe-day-week">{day.week}</p>
          <p className="pe-day-goal">🎯 Goal: {day.goal}</p>
          <div className="pe-day-progress-row">
            <div className="pe-day-progress-bar">
              <div className="pe-day-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="pe-day-progress-label">{pct}% ({doneItems}/{totalItems})</span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="pe-sections-grid">
        {day.sections.map((section, si) => (
          <SectionBlock
            key={si}
            day={dayNum}
            sectionIdx={si}
            section={section}
            checked={checked}
            onToggle={onToggle}
          />
        ))}
      </div>

      {/* Hands-on */}
      <div className={`pe-handson${handsonDone ? ' pe-handson--done' : ''}`}>
        <div className="pe-handson-header">
          <span className="pe-handson-icon">⚙️</span>
          <span className="pe-handson-title">Hands-On Exercise</span>
        </div>
        <p className="pe-handson-text">{day.handson}</p>
        <label className="pe-handson-check">
          <input
            type="checkbox"
            checked={handsonDone}
            onChange={() => onToggle(handsonKey)}
          />
          Mark hands-on complete
        </label>
      </div>
    </div>
  );
}

export default function PlatformEngineeringPage() {
  const [checked, setChecked] = useState(loadChecked);
  const [activeDay, setActiveDay] = useState(1);
  const [prereqOpen, setPrereqOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  /* persist */
  const handleToggle = useCallback((key) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      saveChecked(next);
      return next;
    });
  }, []);

  /* overall progress */
  const { totalTasks, doneTasks } = useMemo(() => {
    let total = 0, done = 0;
    for (let d = 1; d <= 7; d++) {
      const day = PLATFORM_PLAN[d];
      day.sections.forEach((s, si) => {
        s.items.forEach((_, ii) => {
          total++;
          if (checked[getCheckKey(d, si, ii)]) done++;
        });
      });
      total++; /* hands-on */
      if (checked[getHandsonKey(d)]) done++;
    }
    return { totalTasks: total, doneTasks: done };
  }, [checked]);

  const progressPct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  /* per-day completion */
  const dayCompletion = useCallback((d) => {
    const day = PLATFORM_PLAN[d];
    let total = 1, done = 0;
    day.sections.forEach((s, si) => {
      s.items.forEach((_, ii) => {
        total++;
        if (checked[getCheckKey(d, si, ii)]) done++;
      });
    });
    if (checked[getHandsonKey(d)]) done++;
    return total ? done / total : 0;
  }, [checked]);

  return (
    <div className="ip-page">
      {/* HEADER */}
      <header className="ip-header">
        <h1>🏗️ 7-Day Full Stack Platform Engineering</h1>
        <p>Azure · Kubernetes · Docker · Terraform · Kafka · Vault · Grafana · Splunk · Microservices · Governance</p>
        <div className="ip-legend">
          <span>☁️ Cloud &amp; K8s</span>
          <span>🐳 CI/CD &amp; Docker</span>
          <span>📨 Data Engineering</span>
          <span>🔐 Security &amp; Identity</span>
          <span>🧩 Microservices</span>
          <span>📊 Observability</span>
          <span>📚 Governance</span>
        </div>
      </header>

      <div className="ip-main">
        {/* Prerequisites toggle */}
        <button className="ip-roadmap-toggle" onClick={() => setPrereqOpen((o) => !o)}>
          📋 {prereqOpen ? 'Hide' : 'View'} Prerequisites Before Day 1
        </button>

        {prereqOpen && (
          <div className="pe-prereq-box">
            <h3>Prerequisites Before Day 1</h3>
            <ul>
              {PLATFORM_PREREQUISITES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Summary toggle */}
        <button className="ip-roadmap-toggle" style={{ marginTop: '0.5rem' }} onClick={() => setSummaryOpen((o) => !o)}>
          📊 {summaryOpen ? 'Hide' : 'View'} 7-Day Summary Table
        </button>

        {summaryOpen && (
          <div className="pe-summary-box">
            <h3>7-Day Program Summary</h3>
            <table className="pe-summary-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Focus Area</th>
                  <th>Key Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORM_SUMMARY.map((row) => (
                  <tr key={row.day}>
                    <td><strong>Day {row.day}</strong></td>
                    <td>{row.focus}</td>
                    <td>{row.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Overall progress */}
        <div className="ip-progress-wrap">
          <div className="ip-progress-bar">
            <div className="ip-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
        <p className="ip-progress-text">
          Overall: {progressPct}% complete ({doneTasks}/{totalTasks} tasks)
        </p>

        {/* Day navigation */}
        <div className="ip-day-nav">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((d) => {
            const ratio = dayCompletion(d);
            return (
              <button
                key={d}
                className={
                  `ip-day-btn` +
                  (activeDay === d ? ' ip-day-btn--active' : '') +
                  (ratio === 1 ? ' ip-day-btn--done' : '')
                }
                onClick={() => setActiveDay(d)}
                title={PLATFORM_PLAN[d]?.title}
              >
                Day {d}
              </button>
            );
          })}
        </div>

        {/* Active day card */}
        <DayCard dayNum={activeDay} checked={checked} onToggle={handleToggle} />
      </div>

      <footer className="ip-footer">
        ✅ Auto-saves to localStorage · Master the full Optum/UHG platform engineering stack
      </footer>
    </div>
  );
}
