import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Submission from './Submission.jsx'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/submission" element={<Submission/>}/>
    </Routes>
  </BrowserRouter>
)
