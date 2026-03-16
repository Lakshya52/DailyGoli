import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// common imports
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// pages import
import Landing from "./pages/Landing"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App