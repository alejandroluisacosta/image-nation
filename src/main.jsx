import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SearchPage />}/>
        <Route path="favorites" element={<FavoritesPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
