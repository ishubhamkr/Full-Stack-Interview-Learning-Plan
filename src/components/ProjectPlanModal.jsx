import { useEffect, useRef } from 'react';

export default function ProjectPlanModal({ plan, dayNum, track, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    // trap focus
    ref.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!plan) return null;

  const trackColor = {
    java: 'var(--java-accent)',
    react: 'var(--react-accent)',
    graphql: 'var(--graphql-accent)',
    kafka: 'var(--kafka-accent)',
  }[track] || 'var(--accent)';

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" ref={ref} tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-header">
          <div>
            <div className="modal-title" style={{ color: trackColor }}>
              📅 Day {dayNum} — Study Plan
            </div>
            <div className="modal-subtitle">{plan.title}</div>
            <div className="modal-subtitle" style={{ marginTop: 6, fontSize: '.82rem' }}>
              {plan.goal}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modal-body">
          {/* Schedule */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: trackColor }}>⏱ Daily Schedule</div>
            {plan.schedule.map((s, i) => (
              <div className="schedule-row" key={i}>
                <div className="schedule-time">{s.time}</div>
                <div className="schedule-activity">{s.activity}</div>
              </div>
            ))}
          </div>

          {/* Practice Tasks */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: trackColor }}>🛠 Hands-On Tasks</div>
            <div className="task-list">
              {plan.tasks.map((t, i) => (
                <div className="task-item" key={i}>{t}</div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: trackColor }}>📚 Study Resources</div>
            <div className="resource-list">
              {plan.resources.map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                  ↗ {r.label}
                </a>
              ))}
            </div>
          </div>

          {/* Deliverable */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: trackColor }}>🎯 Day Deliverable</div>
            <div className="deliverable-box">{plan.deliverable}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
