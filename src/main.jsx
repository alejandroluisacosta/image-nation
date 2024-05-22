import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './Pages/SearchPage/SearchPage'
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage'
import { Provider } from 'react-redux'
import Store from './app/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SearchPage />}/>
          <Route path="favorites" element={<FavoritesPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
