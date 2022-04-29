import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Header from './components/Header';
import Popular from './routes/Popular';

import GlobalStyle from './GlobalStyle';
import TopRated from './routes/TopRated';
import Upcoming from './routes/Upcoming';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="popular" element={<Popular />} />
        <Route path="toprated" element={<TopRated />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
