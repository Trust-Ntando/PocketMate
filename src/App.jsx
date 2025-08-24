import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BudgetTracker from "./pages/BudgetTracker";
import Transactions from "./pages/Transactions";
import SavingsGoals from "./pages/SavingsGoals";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-600 text-white p-6 flex flex-col">
          <h1 className="text-2xl font-bold mb-8">PocketMate</h1>
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:bg-blue-700 p-2 rounded ${isActive ? "bg-blue-700 font-bold" : ""}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/budget"
              className={({ isActive }) =>
                `hover:bg-blue-700 p-2 rounded ${isActive ? "bg-blue-700 font-bold" : ""}`
              }
            >
              Budget Tracker
            </NavLink>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `hover:bg-blue-700 p-2 rounded ${isActive ? "bg-blue-700 font-bold" : ""}`
              }
            >
              Transactions
            </NavLink>
            <NavLink
              to="/savings"
              className={({ isActive }) =>
                `hover:bg-blue-700 p-2 rounded ${isActive ? "bg-blue-700 font-bold" : ""}`
              }
            >
              Savings Goals
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
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
