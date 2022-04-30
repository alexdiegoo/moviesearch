import React, { useState } from 'react';
import { getSearchMovies } from '../../movieApi';

import { Input } from './styles';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    const query = e.target.value
    setInputValue(query);
    getSearchMovies(query);
  }
  return (
    <Input placeholder='Search movies' value={inputValue} onChange={handleChange} />
  );
}

export default SearchInput;