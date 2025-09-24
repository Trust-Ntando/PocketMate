import { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  // State
  const [budget, setBudget] = useState(0);
  const [savings, setSavings] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [transactionInput, setTransactionInput] = useState({ description: "", amount: "" });
  const [budgetInput, setBudgetInput] = useState("");

  // Handlers
  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(budgetInput);
    if (!isNaN(value) && value > 0) {
      setBudget(value);
      setBudgetInput("");
    }
  };

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(transactionInput.amount);
    if (transactionInput.description && !isNaN(value)) {
      setTransactions([...transactions, { ...transactionInput, amount: value }]);
      setSavings((prev) => prev + value);
      setTransactionInput({ description: "", amount: "" });
    }
  };

  return (
    <div className="dashboard">
      {/* Welcome Card */}
      <div className="welcome-card">
        <h1>Welcome to PocketMate</h1>
        <p>Your friendly money companion. Track budgets, manage transactions, and reach your savings goals.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card stat-budget">
          <h2>Total Budget</h2>
          <p>R {budget.toFixed(2)}</p>
        </div>
        <div className="stat-card stat-savings">
          <h2>Total Savings</h2>
          <p>R {savings.toFixed(2)}</p>
        </div>
        <div className="stat-card stat-transactions">
          <h2>Transactions</h2>
          <p>{transactions.length}</p>
        </div>
      </div>

      {/* Budget Input */}
      <form className="input-form" onSubmit={handleBudgetSubmit}>
        <h3>Add / Update Budget</h3>
        <input
          type="number"
          placeholder="Enter budget amount"
          value={budgetInput}
          onChange={(e) => setBudgetInput(e.target.value)}
        />
        <button type="submit">Set Budget</button>
      </form>

      {/* Transaction Input */}
      <form className="input-form" onSubmit={handleTransactionSubmit}>
        <h3>Add Transaction</h3>
        <input
          type="text"
          placeholder="Description"
          value={transactionInput.description}
          onChange={(e) =>
            setTransactionInput({ ...transactionInput, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Amount"
          value={transactionInput.amount}
          onChange={(e) =>
            setTransactionInput({ ...transactionInput, amount: e.target.value })
          }
        />
        <button type="submit">Add Transaction</button>
      </form>

      {/* Transaction List */}
      <div className="transactions-list">
        <h3>Transactions</h3>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {transactions.map((t, index) => (
              <li key={index}>
                {t.description}: R {t.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
