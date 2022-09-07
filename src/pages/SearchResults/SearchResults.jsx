import React, { useEffect, usaeState, useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { getGifs } from '../../services/getGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );
  return <>{loading ? <h1>Cargando... 🎇</h1> : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchResults;
