import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Photos from './pages/photos.jsx'
import Layout from './components/layout.jsx'
import RocketOptimization from './pages/RocketOptimization.jsx'
import ArduinoProjects from './pages/ArduinoProjects.jsx'
import FormulaBuckeyes from './pages/FormulaBuckeyes.jsx'
import Allegion from './pages/Allegion.jsx'
import MiniKeyboard from './pages/MiniKeyboard.jsx'
import Sensors from './pages/Sensors.jsx'
import PathfinderRobot from './pages/PathFinderRobot.jsx'  // Import the new page
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
            <Route path="/formula-buckeyes" element={<FormulaBuckeyes />} />
            <Route path="/allegion" element={<Allegion />} />
            <Route path="/mini-keyboard" element={<MiniKeyboard />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/pathfinder-robot" element={<PathfinderRobot />} />  {/* Add this new route */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)