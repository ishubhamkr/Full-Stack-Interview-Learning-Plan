import { useEffect, useRef, useCallback } from 'react';

const TRACK_META = {
  java:    { label: 'Java & Spring Boot', color: 'var(--java-accent)',    dot: 'var(--java-accent)' },
  react:   { label: 'React & Testing',    color: 'var(--react-accent)',   dot: 'var(--react-accent)' },
  graphql: { label: 'GraphQL',            color: 'var(--graphql-accent)', dot: 'var(--graphql-accent)' },
  kafka:   { label: 'Apache Kafka',       color: 'var(--kafka-accent)',   dot: 'var(--kafka-accent)' },
};

export default function Sidebar({ days, completedSet, activeDay, isOpen, onClose, getTrack, onDaySelect }) {
  const ref = useRef(null);

  const handleOverlayClick = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const active = el.querySelector('.nav-item.active');
    if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeDay]);

  const tracks = {};
  days.forEach((day) => {
    const t = getTrack(day.day);
    if (!tracks[t]) tracks[t] = [];
    tracks[t].push(day);
  });

  const handleClick = (id) => {
    if (onDaySelect) onDaySelect(id);
    else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick} />
      <nav className={`sidebar ${isOpen ? 'open' : ''}`} ref={ref} aria-label="Day navigation">
        <div className="sidebar-inner">
          {['java', 'react', 'graphql', 'kafka'].map((track) => {
            if (!tracks[track]) return null;
            const meta = TRACK_META[track];
            return (
              <div key={track}>
                <div className="nav-track-header">
                  <span className="nav-track-dot" style={{ background: meta.dot }} />
                  {meta.label}
                </div>
                {tracks[track].map((day) => (
                  <button
                    key={day.id}
                    className={`nav-item ${activeDay === day.id ? 'active' : ''} ${completedSet.has(day.id) ? 'completed' : ''}`}
                    data-track={track}
                    onClick={() => handleClick(day.id)}
                    aria-current={activeDay === day.id ? 'true' : undefined}
                  >
                    <span className="nav-day-badge">{day.day}</span>
                    <span className="nav-title">{day.title}</span>
                    <svg className="nav-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}

