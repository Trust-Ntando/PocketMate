import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Branding */}
      <header className="header">
        <h1 className="title">PocketMate</h1>
        <p className="tagline">Your friendly money companion</p>
      </header>

      {/* Simple intro */}
      <main className="main-content">
        <p>
          Welcome to <strong>PocketMate</strong> 🎉  
          Track your spending, set savings goals, and get smarter with your money.
        </p>

        <button className="get-started">
          Get Started
        </button>
      </main>
    </div>
  )
}

export default App
