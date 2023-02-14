import React, { useCallback, useEffect, useRef } from "react";

import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";

import "./SearchResults.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSEO from "hooks/useSEO";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, paginaSiguiente } = useGifs({ keyword });
  const ref = useRef();
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : ref, once: false });

  let title;
  //FIXME: arreglar que no se ve loading 
  if (Boolean(gifs)) {
    title = `${gifs.length} resultados de '${decodeURI(keyword)}'`;
  } else if (loading) {
    title = "Cargando resultados ...";
  } else {
    title = "";
  }
  
  useSEO({ title });

  //TODO: optimizacion renders

  const handleNextPage = useCallback(
    debounce(() => {
      paginaSiguiente();
    }, 200),
    [paginaSiguiente]
  );

  useEffect(() => {
    if (isNearScreen) handleNextPage();
  }, [handleNextPage, isNearScreen]);

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
