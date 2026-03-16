import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from "./pages/Landing"

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        
        {/* ⚠️ IMPORTANT: Navbar should NOT be inside any overflow/transform */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App