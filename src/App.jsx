import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

import Popular from './routes/Popular';
import TopRated from './routes/TopRated';
import Upcoming from './routes/Upcoming';
import Movie from './routes/Movie';
import WatchList from './routes/WatchList';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate  to="/popular"/>} />
        <Route path="popular" element={<Popular />} />
        <Route path="toprated" element={<TopRated />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="watchlist" element={<WatchList />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App;