import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="max-w-screen-sm mx-auto selection:bg-primary selection:text-white font-ubuntu">
      <App />
    </div>
  </React.StrictMode>
)
