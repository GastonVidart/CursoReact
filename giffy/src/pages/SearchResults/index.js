import React from "react";

import { useGifs } from "hooks/useGifs";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";

import './SearchResults.css'

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, paginaSiguiente } = useGifs({ keyword });

  //TODO: optimizacion renders

  const handleNextPage = () => {
    paginaSiguiente();
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
      <button className="boton" onClick={handleNextPage}>Cargar Más</button>
    </>
  );
}
