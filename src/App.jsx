import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import DAYS from './data/days';
import PROJECT_PLANS from './data/projectPlans';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import DaySection from './components/DaySection';
import ProjectPlanModal from './components/ProjectPlanModal';
import ToastContainer, { toast } from './components/ToastContainer';

function getTrack(dayNum) {
  if (dayNum <= 10) return 'java';
  if (dayNum <= 16) return 'react';
  if (dayNum <= 20) return 'graphql';
  return 'kafka';
}

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); }
  catch { return new Set(); }
}
function saveSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('fsm_theme') || 'dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fsm_theme', theme);
  }, [theme]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const [completedSet, setCompletedSet] = useState(() => loadSet('fsm_completed'));
  const [viewedSet,    setViewedSet]    = useState(() => loadSet('fsm_viewed'));
  const [searchQuery,  setSearchQuery]  = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDay,  setSelectedDay]  = useState(DAYS[0]?.id);   // clicked day
  const [activeDay,    setActiveDay]    = useState(DAYS[0]?.id);   // scroll-tracked day
  const [planModal,    setPlanModal]    = useState(null);
  const mainRef = useRef(null);

  const totalQuestions = useMemo(() => DAYS.reduce((a, d) => a + d.questions.length, 0), []);
  const completedCount = completedSet.size;
  const progressPct = DAYS.length ? Math.round((completedCount / DAYS.length) * 100) : 0;

  // When a day is clicked (from nav strip or sidebar), jump to that day only
  const handleDaySelect = useCallback((dayId) => {
    setSelectedDay(dayId);
    setSearchQuery('');      // clear search so the day is always visible
    setActiveFilter('all');  // clear filter
    // Scroll to section after state update
    requestAnimationFrame(() => {
      const el = document.getElementById(dayId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const handleMarkDone = useCallback((dayId) => {
    setCompletedSet((prev) => {
      const next = new Set(prev);
      const day  = DAYS.find((d) => d.id === dayId);
      if (next.has(dayId)) {
        next.delete(dayId);
        toast('Day ' + day?.day + ' unmarked', 'info');
      } else {
        next.add(dayId);
        toast('Day ' + day?.day + ': ' + day?.title + ' completed! 🎉');
      }
      saveSet('fsm_completed', next);
      return next;
    });
  }, []);

  const handleViewed = useCallback((key) => {
    setViewedSet((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      saveSet('fsm_viewed', next);
      return next;
    });
  }, []);

  const handleVisible   = useCallback((dayId) => setActiveDay(dayId), []);
  const handlePlanClick = useCallback((dayId, dayNum) => setPlanModal({ dayId, dayNum }), []);

  const showBanner = searchQuery.trim().length > 0;
  const bannerText = useMemo(() => {
    if (!showBanner) return '';
    const q    = searchQuery.trim().toLowerCase();
    const norm = (s) => s.replace(/<[^>]+>/g, '').toLowerCase();
    let count  = 0;
    DAYS.forEach((day) => {
      day.questions.forEach((question) => {
        const tagOk = activeFilter === 'all' || question.tag === activeFilter;
        const srOk  = norm(question.q).includes(q) || norm(question.body).includes(q);
        if (tagOk && srOk) count++;
      });
    });
    return count === 0
      ? 'No results for "' + searchQuery + '"'
      : count + ' result' + (count !== 1 ? 's' : '') + ' for "' + searchQuery + '"';
  }, [searchQuery, activeFilter, showBanner]);

  const [showBackTop, setShowBackTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // In search/filter mode show all days; otherwise show only selectedDay
  const isFiltering = searchQuery.trim().length > 0 || activeFilter !== 'all';

  return (
    <div className="app-layout">
      <Topbar
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
        onHamburger={() => setSidebarOpen((o) => !o)}
        progressPct={progressPct}
      />

      <Sidebar
        days={DAYS}
        completedSet={completedSet}
        activeDay={isFiltering ? activeDay : selectedDay}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        getTrack={getTrack}
        onDaySelect={handleDaySelect}
      />

      <main className="main-content" ref={mainRef}>
        <Hero
          totalDays={DAYS.length}
          totalQuestions={totalQuestions}
          completedCount={completedCount}
        />

        {/* Day quick-nav strip */}
        {!isFiltering && (
          <div className="day-nav-strip">
            {DAYS.map((day) => (
              <button
                key={day.id}
                className={
                  'day-nav-btn' +
                  (selectedDay === day.id ? ' active' : '') +
                  (completedSet.has(day.id) ? ' done' : '')
                }
                onClick={() => handleDaySelect(day.id)}
              >
                Day {day.day}
              </button>
            ))}
          </div>
        )}

        {showBanner && (
          <div className="search-banner visible">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            {bannerText}
          </div>
        )}

        <div className="days-container">
          {DAYS.map((day) => {
            // Hide days not matching selection (unless filtering by search/tag)
            if (!isFiltering && day.id !== selectedDay) return null;
            return (
              <DaySection
                key={day.id}
                day={day}
                track={getTrack(day.day)}
                isDone={completedSet.has(day.id)}
                viewedSet={viewedSet}
                activeFilter={activeFilter}
                searchQuery={searchQuery}
                onMarkDone={handleMarkDone}
                onViewed={handleViewed}
                onPlanClick={handlePlanClick}
                onVisible={handleVisible}
              />
            );
          })}
        </div>
      </main>

      {planModal && (
        <ProjectPlanModal
          plan={PROJECT_PLANS[planModal.dayId]}
          dayNum={planModal.dayNum}
          track={getTrack(planModal.dayNum)}
          onClose={() => setPlanModal(null)}
        />
      )}

      <ToastContainer />

      <button
        className={'back-to-top' + (showBackTop ? ' visible' : '')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </div>
  );
}
