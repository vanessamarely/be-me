import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App
