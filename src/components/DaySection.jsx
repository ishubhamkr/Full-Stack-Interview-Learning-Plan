import { useRef, useEffect } from 'react';
import AccordionItem from './AccordionItem';

export default function DaySection({
  day,
  track,
  isDone,
  viewedSet,
  activeFilter,
  searchQuery,
  onMarkDone,
  onViewed,
  onPlanClick,
  onVisible,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(day.id); },
      { rootMargin: '-58px 0px -65% 0px', threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [day.id, onVisible]);

  // filter questions
  const normalise = (str) => str.replace(/<[^>]+>/g, '').toLowerCase();
  const qs = normalise(searchQuery);

  const visibleQuestions = day.questions.map((q, qi) => {
    const tagMatch = activeFilter === 'all' || q.tag === activeFilter;
    const searchMatch = !qs || normalise(q.q).includes(qs) || normalise(q.body).includes(qs);
    return { q, qi, visible: tagMatch && searchMatch };
  });

  const hasVisible = visibleQuestions.some((v) => v.visible);

  const viewedCount = day.questions.filter((_, qi) => viewedSet.has(`${day.id}_${qi}`)).length;
  const pct = Math.round((viewedCount / day.questions.length) * 100);

  if (!hasVisible) return null;

  return (
    <section ref={sectionRef} id={day.id} className="day-section" data-track={track}>
      <div className="section-header">
        <span className="day-pill" data-track={track}>Day {day.day}</span>
        <h2 className="section-title">{day.title}</h2>
        <span className="section-meta">{day.questions.length} Qs</span>

        <button className="plan-btn" onClick={() => onPlanClick(day.id, day.day)}>
          📅 Study Plan
        </button>

        <button
          className={`mark-complete-btn${isDone ? ' done' : ''}`}
          onClick={() => onMarkDone(day.id)}
        >
          {isDone ? '✓ Done' : 'Mark Done'}
        </button>
      </div>

      <div className="section-progress-bar">
        <div className="section-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="topic-chips">
        {day.topics.map((t) => (
          <span key={t} className="topic-chip">{t}</span>
        ))}
      </div>

      <div className="accordion-list">
        {visibleQuestions.map(({ q, qi, visible }) =>
          visible ? (
            <AccordionItem
              key={qi}
              question={q}
              index={qi}
              dayId={day.id}
              isViewed={viewedSet.has(`${day.id}_${qi}`)}
              onViewed={onViewed}
            />
          ) : null
        )}
      </div>
    </section>
  );
}
