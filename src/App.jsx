import React, { StrictMode } from 'react' // ✅ add React import
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Task'
import AboutPage from './pages/AboutPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App