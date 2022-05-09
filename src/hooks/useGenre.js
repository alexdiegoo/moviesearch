import { useState, useEffect } from 'react';
import getGenre from '../utils/getGenre';

const useGenre = (ids) => {
  const [state, setState] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getGenre(ids);
      setState(data);
    })();
  }, []);


  return state;
}

export default useGenre;