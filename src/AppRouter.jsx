import { Routes, Route, NavLink } from 'react-router-dom';
import App from './App.jsx';
import InterviewPlanPage from './pages/InterviewPlanPage.jsx';
import PlatformEngineeringPage from './pages/PlatformEngineeringPage.jsx';

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
        <NavLink
          to="/platform-engineering"
          className={({ isActive }) => `page-tab${isActive ? ' page-tab--active' : ''}`}
        >
          🏗️ 7-Day Platform Engineering
        </NavLink>
      </nav>

      <Routes>
        <Route path="/"                       element={<App />} />
        <Route path="/plan"                   element={<InterviewPlanPage />} />
        <Route path="/platform-engineering"   element={<PlatformEngineeringPage />} />
      </Routes>
    </>
  );
}
