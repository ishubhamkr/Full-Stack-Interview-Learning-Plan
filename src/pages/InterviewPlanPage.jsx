import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { INTERVIEW_PLAN } from '../data/interviewPlanData';

/* ── helpers ── */
function getTaskKey(day, idx) { return `ip_d${day}_t${idx}`; }
function getAllTasks(d) { return [...d.dsa, ...d.learning, ...d.project]; }

function loadChecked() {
  try {
    const raw = localStorage.getItem('ip_checked');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveChecked(obj) {
  localStorage.setItem('ip_checked', JSON.stringify(obj));
}

const LC_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f89f1b" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
  </svg>
);
const YT_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#ff4444" aria-hidden="true">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);
const DOC_SVG = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#60a5fa" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-7-7H8v-2h3v2zm5 3H8v-2h8v2zm0-6H8V8h8v2z"/>
  </svg>
);

function TaskRow({ taskKey, task, type, checked, onToggle }) {
  const isYt  = task.type === 'yt';
  const icon  = type === 'dsa' ? LC_SVG : (isYt ? YT_SVG : DOC_SVG);
  const cls   = type === 'dsa' ? 'ip-link-lc' : (isYt ? 'ip-link-yt' : 'ip-link-doc');
  const label = type === 'dsa' ? 'LeetCode' : (isYt ? 'YouTube' : 'Docs');

  return (
    <div className={`ip-task${checked ? ' ip-task--done' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(taskKey)}
        aria-label={`Mark "${task.name}" complete`}
      />
      <div className="ip-task-body">
        <div className="ip-task-title">
          {task.name}
          {type === 'dsa' && (
            <span className="ip-task-time"> ({task.time})</span>
          )}
        </div>
        {(type === 'project' || type === 'learning') && task.detail && (
          <div className="ip-task-sub">{task.detail}</div>
        )}
        {type === 'learning' && task.resource && !task.detail && (
          <div className="ip-task-sub">{task.resource}</div>
        )}
        {type === 'learning' && task.resource && task.detail && (
          <div className="ip-task-sub">{task.resource}</div>
        )}
        <div className="ip-task-links">
          <a
            href={task.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`ip-link ${cls}`}
          >
            {icon} {label}
          </a>
        </div>
      </div>
    </div>
  );
}

function DayCard({ dayNum, checked, onToggle }) {
  const day = INTERVIEW_PLAN[dayNum];
  if (!day) return null;

  const dsaMin = day.dsa.reduce((s, t) => s + parseInt(t.time), 0);
  const dsaOffset = 0;
  const learnOffset = day.dsa.length;
  const projOffset  = day.dsa.length + day.learning.length;
  const mockOffset  = projOffset + day.project.length;
  const mockKey     = `ip_mock${dayNum}`;
  const mockChecked = !!checked[mockKey];

  return (
    <div className="ip-day-card">
      {/* Day header */}
      <div className="ip-day-header">
        <div className="ip-day-number">Day {dayNum}</div>
        <div className="ip-day-meta">
          <h2>{day.title}</h2>
          <p>{day.week}</p>
          <div className="ip-time-chips">
            <span className="ip-chip ip-chip--dsa">🧠 DSA {dsaMin}m</span>
            <span className="ip-chip ip-chip--learn">📘 Learning 2h</span>
            <span className="ip-chip ip-chip--proj">💻 Project 1.5h</span>
            {day.mock && <span className="ip-chip ip-chip--mock">🎤 Mock 30m</span>}
          </div>
        </div>
      </div>

      {/* DSA section */}
      <div className="ip-section ip-section--dsa">
        <div className="ip-section-title">🧠 DSA — 2 Hours</div>
        {day.dsa.map((t, i) => {
          const k = getTaskKey(dayNum, dsaOffset + i);
          return <TaskRow key={k} taskKey={k} task={t} type="dsa" checked={!!checked[k]} onToggle={onToggle} />;
        })}
      </div>

      {/* Learning section */}
      <div className="ip-section ip-section--learn">
        <div className="ip-section-title">📘 Learning — 2 Hours</div>
        {day.learning.map((t, i) => {
          const k = getTaskKey(dayNum, learnOffset + i);
          return <TaskRow key={k} taskKey={k} task={t} type="learning" checked={!!checked[k]} onToggle={onToggle} />;
        })}
      </div>

      {/* Project section */}
      <div className="ip-section ip-section--proj">
        <div className="ip-section-title">💻 Project Work — 1.5 Hours</div>
        {day.project.map((t, i) => {
          const k = getTaskKey(dayNum, projOffset + i);
          return <TaskRow key={k} taskKey={k} task={t} type="project" checked={!!checked[k]} onToggle={onToggle} />;
        })}
      </div>

      {/* Mock section */}
      {day.mock && (
        <div className="ip-section ip-section--mock">
          <div className="ip-section-title">🎤 Mock Interview — 30 Minutes</div>
          <div className={`ip-task${mockChecked ? ' ip-task--done' : ''}`}>
            <input
              type="checkbox"
              checked={mockChecked}
              onChange={() => onToggle(mockKey)}
              aria-label="Mark mock interview complete"
            />
            <div className="ip-task-body">
              <div className="ip-task-title">Verbal walkthrough drill</div>
              <div className="ip-task-sub">
                • 15m: Explain 1 DSA solution aloud (Big-O analysis)<br />
                • 10m: Walk through project architecture + trade-offs<br />
                • 5m: System design or scaling question
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InterviewPlanPage() {
  const [checked, setChecked] = useState(loadChecked);
  const [activeDay, setActiveDay] = useState(1);
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const cardRef = useRef(null);

  /* persist to localStorage */
  useEffect(() => {
    saveChecked(checked);
  }, [checked]);

  const handleToggle = useCallback((key) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      return next;
    });
  }, []);

  const handleDayClick = useCallback((d) => {
    setActiveDay(d);
    // Smooth scroll to card area
    requestAnimationFrame(() => {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  /* progress calculation */
  const { totalTasks, doneTasks } = useMemo(() => {
    let total = 0;
    let done  = 0;
    for (let d = 1; d <= 30; d++) {
      const day  = INTERVIEW_PLAN[d];
      const all  = getAllTasks(day);
      total += all.length + (day.mock ? 1 : 0);
      all.forEach((_, i) => {
        if (checked[getTaskKey(d, i)]) done++;
      });
      if (day.mock && checked[`ip_mock${d}`]) done++;
    }
    return { totalTasks: total, doneTasks: done };
  }, [checked]);

  const progressPct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  /* day completion ratio for nav btn coloring */
  const dayCompletion = useCallback((d) => {
    const day = INTERVIEW_PLAN[d];
    const all = getAllTasks(day);
    const total = all.length + (day.mock ? 1 : 0);
    let done = 0;
    all.forEach((_, i) => { if (checked[getTaskKey(d, i)]) done++; });
    if (day.mock && checked[`ip_mock${d}`]) done++;
    return total ? done / total : 0;
  }, [checked]);

  return (
    <div className="ip-page">
      {/* HEADER */}
      <header className="ip-header">
        <h1>🚀 30-Day Full-Stack Interview Learning Plan</h1>
        <p>Java · Spring Boot · React · Node.js · PostgreSQL · Redis · Kafka · Docker · AWS · System Design · AI</p>
        <div className="ip-legend">
          <span>🧠 DSA 2h</span>
          <span>📘 Learning 2h</span>
          <span>💻 Project 1.5h</span>
          <span>🎤 Mock 30m (alt days)</span>
          <span>⏱ 6h/day total</span>
        </div>
      </header>

      <div className="ip-main">
        {/* Roadmap toggle */}
        <button className="ip-roadmap-toggle" onClick={() => setRoadmapOpen((o) => !o)}>
          📊 {roadmapOpen ? 'Hide' : 'View'} Full Stack Roadmap
        </button>

        {roadmapOpen && (
          <div className="ip-roadmap">
            <h3>Full Stack Learning Pipeline → Spency Project</h3>
            <div className="ip-arch-box">
              <span className="ip-arch-title">Spency Target Architecture</span><br />
              <span className="ip-arch-react">React (Vite+Tailwind) — 6 modules: auth/user/ca/admin/shopkeeper/account</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;│<br />
              <span className="ip-arch-gw">spency-gateway (Express Proxy)</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;│<br />
              ┌──────────────────────────────────┐<br />
              │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br />
              <span className="ip-arch-spring">Spring Boot</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ip-arch-node">Node.js</span><br />
              User/Auth/CA/Shopkeeper&nbsp;&nbsp;Order Service<br />
              &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br />
              <span className="ip-arch-spring">PostgreSQL</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ip-arch-node">MongoDB Atlas</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;│<br />
              <span className="ip-arch-redis">Redis Cache · Kafka Event Bus</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;│<br />
              <span className="ip-arch-aws">AWS Cloud — EC2 + S3 + CloudFront + ALB</span>
            </div>
            <div className="ip-roadmap-grid">
              {[
                { h: 'Foundations', items: ['Java Core', 'OOP', 'Data Structures'] },
                { h: 'Backend', items: ['Spring Boot', 'REST APIs', 'Security (JWT)', 'Microservices'] },
                { h: 'Frontend', items: ['React', 'Hooks', 'API Integration'] },
                { h: 'Secondary Backend', items: ['Node.js', 'Express'] },
                { h: 'Data Layer', items: ['PostgreSQL', 'Redis', 'MongoDB basics'] },
                { h: 'Distributed Systems', items: ['Kafka', 'Event Driven Arch'] },
                { h: 'Cloud & DevOps', items: ['Docker', 'AWS EC2 + S3', 'Load Balancer'] },
                { h: 'Architecture', items: ['System Design', 'Caching', 'Rate Limiting'] },
                { h: 'AI Integration', items: ['OpenAI API', 'Prompt Engineering', 'RAG basics'] },
              ].map((c) => (
                <div className="ip-roadmap-card" key={c.h}>
                  <h4>{c.h}</h4>
                  <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
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

        {/* Day navigation grid */}
        <div className="ip-day-nav">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => {
            const ratio = dayCompletion(d);
            return (
              <button
                key={d}
                className={
                  `ip-day-btn` +
                  (activeDay === d ? ' ip-day-btn--active' : '') +
                  (ratio === 1 ? ' ip-day-btn--done' : '')
                }
                onClick={() => handleDayClick(d)}
                title={INTERVIEW_PLAN[d]?.title}
              >
                Day {d}
              </button>
            );
          })}
        </div>

        {/* Day card with ref for scroll anchor */}
        <div ref={cardRef}>
          <DayCard dayNum={activeDay} checked={checked} onToggle={handleToggle} />
        </div>
      </div>

      <footer className="ip-footer">
        ✅ Auto-saves to localStorage · Build one production project touching every layer
      </footer>
    </div>
  );
}

