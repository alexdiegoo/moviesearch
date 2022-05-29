import React, { useEffect, useState } from 'react';

import { getMovieImages, IMAGE_URL } from '../../movieApi';
import { GaleryStyles, Image } from './styles';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Galery = ({ id }) => {
  const [images, setImages] = useState(null);
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getMovieImages(id);
      setImages(data);
    })();
  }, []);

  const handleClick = (type) => {
    if(type === 'increment') {
      if(indexImage >= images.length) return setIndexImage(0);

      setIndexImage((prevState) => prevState + 1 );
    } else if (type === 'decrement') {
      if(indexImage === 0) return setIndexImage(Number(images.length - 1));
      
      setIndexImage((prevState) => prevState - 1 );
    }
  }

  return (
    <GaleryStyles>
      <MdKeyboardArrowLeft style={{ cursor: 'pointer'}} size={40} onClick={() => handleClick('decrement')} />
      {images && <Image src={`${IMAGE_URL}${images[indexImage].file_path}`} />}
      <MdKeyboardArrowRight style={{ cursor: 'pointer' }} size={40} onClick={() => handleClick('increment')} />
    </GaleryStyles>

  );
}

export default Galery;