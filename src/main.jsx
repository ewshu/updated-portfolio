import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Photos from './pages/photos.jsx'
import Layout from './components/layout.jsx'
import RocketOptimization from './pages/RocketOptimization.jsx'
import ArduinoProjects from './pages/ArduinoProjects.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/rocket-optimization" element={<RocketOptimization />} />
            <Route path="/arduino-projects" element={<ArduinoProjects />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)