import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Alpha from './alpha.jsx'

// New comment 
// Adding a comment from Github

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Alpha />
  </React.StrictMode>,
)
