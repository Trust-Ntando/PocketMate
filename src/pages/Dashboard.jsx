function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to PocketMate
        </h1>
        <p className="text-gray-600 mt-2">
          Your friendly money companion. Track budgets, manage transactions, and reach your savings goals.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold">Total Budget</h2>
          <p className="text-2xl font-bold mt-2">R 0.00</p>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold">Total Savings</h2>
          <p className="text-2xl font-bold mt-2">R 0.00</p>
        </div>
        <div className="bg-purple-500 text-white rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <p className="text-2xl font-bold mt-2">0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
