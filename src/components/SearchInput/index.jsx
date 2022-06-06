import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from './styles';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const query = e.target.value
    setInputValue(query);
    navigate(`search/${query}`);
  }
  return (
    <Input placeholder='Search movies' value={inputValue} onChange={handleChange} />
  );
}

export default SearchInput;