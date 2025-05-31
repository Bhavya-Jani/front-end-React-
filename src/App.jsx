import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import './index.css'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="site-header-content">
           {/* Maybe add a site title or logo here later if needed */}
           <div className="theme-toggle-container">
             <ThemeToggle dark={dark} setDark={setDark} />
           </div>
        </div>
      </header>
      <Header />

      {/* Main content area with tabs and sidebar */}
      <main className="main-content-area">
        <div className="tabs-and-content">
            <div className="tabs-navigation">
                {/* Placeholder for tabs */}
                <button className="tab-button active">Overview</button>
                <button className="tab-button">Version History</button>
                <button className="tab-button">Q & A</button>
                <button className="tab-button">Rating & Review</button>
            </div>
            <div className="tab-content">
                {/* Content based on active tab goes here */}
                 {/* Placeholder content sections */}
                 <div className="content-section">
                    <h2>Features</h2>
                    <ul>
                      <li>Auto-generates a comprehensive README file for your project.</li>
                      <li>Analyzes your codebase and suggests the best tech stack.</li>
                      <li>Provides smart recommendations for project structure.</li>
                      <li>Easy to use and highly customizable.</li>
                    </ul>
                 </div>
                 <div className="content-section">
                   <h2>Screenshots</h2>
                   <div className="screenshots-placeholder">Screenshots will go here</div>
                 </div>
            </div>
        </div>

        <div className="sidebar">
          {/* Categories and Tags will go here */}
          <div className="sidebar-section">
            <h3>Categories</h3>
            {/* Placeholder list for categories */}
            <ul>
              <li>Productivity</li>
              <li>Linters</li>
              {/* Add more categories */}
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Tags</h3>
             {/* Placeholder list for tags */}
             <ul>
              <li>readme</li>
              <li>tech stack</li>
              <li>vscode</li>
              <li>automation</li>
              {/* Add more tags */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
