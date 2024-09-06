import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>loading.....</div>}>
        <Routes>
          <Route path='/*' element={<App/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
