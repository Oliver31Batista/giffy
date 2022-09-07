import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../components/hooks/useGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  //Esta logica se aplica ahora desde el custom hook
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);

  // useEffect(
  //   function () {
  //     setLoading(true);
  //     getGifs({ keyword }).then((gifs) => {
  //       setGifs(gifs);
  //       setLoading(false);
  //     });
  //   },
  //   [keyword]
  // );
  return <>{loading ? <h1>Cargando... 🎇</h1> : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchResults;
