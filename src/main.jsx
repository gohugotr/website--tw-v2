import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './pages/about'
import Menu from './pages/menu'
import Contact from './pages/contact'
import Arakatman from './components/Arakatman'


import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Arakatman />
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
