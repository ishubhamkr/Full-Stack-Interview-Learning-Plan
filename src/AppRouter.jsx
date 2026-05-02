import { Routes, Route, NavLink } from 'react-router-dom';
import App from './App.jsx';
import InterviewPlanPage from './pages/InterviewPlanPage.jsx';

export default function AppRouter() {
  return (
    <>
      {/* Global page-switcher nav */}
      <nav className="page-switcher" aria-label="Switch between apps">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `page-tab${isActive ? ' page-tab--active' : ''}`}
        >
          📚 21-Day Interview Q&A
        </NavLink>
        <NavLink
          to="/plan"
          className={({ isActive }) => `page-tab${isActive ? ' page-tab--active' : ''}`}
        >
          🗓 30-Day Learning Plan
        </NavLink>
      </nav>

      <Routes>
        <Route path="/"     element={<App />} />
        <Route path="/plan" element={<InterviewPlanPage />} />
      </Routes>
    </>
  );
}
