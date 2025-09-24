import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BudgetTracker from "./pages/BudgetTracker";
import Transactions from "./pages/Transactions";
import SavingsGoals from "./pages/SavingsGoals";
import './styles/App.css';
import logo from './assets/logo-white.png';  // <-- import logo

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-container">
            <img src={logo} alt="PocketMate Logo" className="logo" />
            <h1>PocketMate</h1>
          </div>
          <nav>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Dashboard
            </NavLink>
            <NavLink to="/budget" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Budget Tracker
            </NavLink>
            <NavLink to="/transactions" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Transactions
            </NavLink>
            <NavLink to="/savings" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Savings Goals
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/budget" element={<BudgetTracker />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/savings" element={<SavingsGoals />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
