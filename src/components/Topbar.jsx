import { useRef, useEffect } from 'react';

export default function Topbar({
  theme,
  onThemeToggle,
  searchQuery,
  onSearch,
  activeFilter,
  onFilter,
  onHamburger,
  progressPct,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current &&
          !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        inputRef.current.blur();
        if (searchQuery) onSearch('');
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [searchQuery, onSearch]);

  const filters = ['all', 'easy', 'medium', 'hard'];

  return (
    <>
      <div
        className="top-progress-line"
        style={{ width: `${progressPct}%` }}
        aria-hidden="true"
      />
      <header className="topbar">
        <button className="hamburger" onClick={onHamburger} aria-label="Open menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"  />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <span className="topbar-brand">FullStack Prep</span>

        <div className="search-wrap">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search questions, topics…"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search"
          />
          <span className="search-kbd">/</span>
          <button
            className={`search-clear${searchQuery ? ' visible' : ''}`}
            onClick={() => { onSearch(''); inputRef.current?.focus(); }}
            aria-label="Clear search"
          >
            ×
          </button>
        </div>

        <div className="filter-pills" role="group" aria-label="Difficulty filter">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-pill${activeFilter === f ? ` active-${f}` : ''}`}
              onClick={() => onFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <button className="theme-btn" onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </header>
    </>
  );
}
