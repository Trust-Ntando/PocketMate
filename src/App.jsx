import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BudgetTracker from "./pages/BudgetTracker";
import Transactions from "./pages/Transactions";
import SavingsGoals from "./pages/SavingsGoals";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="logo-section">
            <h1>PocketMate</h1>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
          </div>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
            <NavLink to="/budget" className={({ isActive }) => isActive ? "active" : ""}>Budget Tracker</NavLink>
            <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>Transactions</NavLink>
            <NavLink to="/savings" className={({ isActive }) => isActive ? "active" : ""}>Savings Goals</NavLink>
          </nav>
        </aside>

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
