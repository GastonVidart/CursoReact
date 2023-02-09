import React, { useCallback, useEffect, useRef } from "react";

import { useGifs } from "hooks/useGifs";
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
    if (isNearScreen) handleNextPage();
  }, [isNearScreen]);

  const handleNextPage = useCallback(
    debounce(() => {
      paginaSiguiente();
    }, 200),
    []
  );

  return (
    <>
      <div className="SearchResults">
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} loading={loading} />
        {/*<button className="boton" onClick={handleNextPage}>
        Cargar Más
  </button>*/}
      </div>
      <div id="visor" ref={ref}></div>
    </>
  );
}
