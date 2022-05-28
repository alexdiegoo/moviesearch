import React, { useEffect, useState } from 'react';

import { IMAGE_URL } from '../../movieApi';
import { SliderActorsStyles, ActorCard, ActorImg, Name } from './styles';
import { getActors } from '../../movieApi';

const SliderActors = ({ id }) => {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getActors(id);
      setActors(data);
    })();
  }, [id]);

  return (
    <SliderActorsStyles>
      {actors && actors.map((actor) => {
        return (
          <ActorCard key={actor.id}>
            <ActorImg src={`${IMAGE_URL}${actor.profile_path}`}/>
            <Name>{actor.name}</Name>
          </ActorCard>
        );
      })}
    </SliderActorsStyles>
  )
}

export default SliderActors;