import { getGenreList } from "../movieApi";

const getGenre = async (ids) => {
  let genres = [];
  const genreList = await getGenreList();

  ids.forEach(id => {
    const genre = genreList.find(genre => genre.id === id);

    genres.push(genre.name);
  });

  return genres.join(',');
}

export default getGenre;