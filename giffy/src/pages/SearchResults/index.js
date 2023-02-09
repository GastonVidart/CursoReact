import React, { useCallback, useEffect, useRef } from "react";

import { useGifs } from "hooks/useGifs";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";

import "./SearchResults.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, paginaSiguiente } = useGifs({ keyword });
  const ref = useRef();
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : ref, once: false });

  //TODO: optimizacion renders

  useEffect(() => {
  const handleNextPage = () => {
    paginaSiguiente();
  };
    if (isNearScreen) handleNextPage();
  }, [isNearScreen]);

  const handleNextPage = useCallback(
    debounce(() => paginaSiguiente(), 1000),
    []
  );

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div /*className="SearchResults"*/>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs}/>
        {/*<button className="boton" onClick={handleNextPage}>
        Cargar Más
  </button>*/}
        <div id="visor" ref={ref}></div>
      </div>
    </>
  );
}
