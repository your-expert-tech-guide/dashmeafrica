import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'

function App() {

  return (
    <div>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
