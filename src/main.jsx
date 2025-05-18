import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import './css/main.css'
import Index from './pages/index.jsx'
import Projects from './pages/projects.jsx'
import AboutMe from './pages/aboutme.jsx'
import Starfield from './assets/starfield.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Starfield />
    <div className="wrapper">
      <Router>
        <div className="container">
          <div className="content maxw">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div >
  </StrictMode >,
)
