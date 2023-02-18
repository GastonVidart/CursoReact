import React, { useCallback, useEffect, useRef } from "react";

import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";

import "./SearchResults.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";

const { REACT_APP_NAME } = process.env;

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, paginaSiguiente } = useGifs({ keyword, rating });
  const ref = useRef();
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : ref, once: false });

  let title;

  if (Boolean(gifs)) {
    title = `${gifs.length} resultados de '${decodeURI(keyword)}'`;
  } else if (loading) {
    title = "Cargando resultados ...";
  } else {
    title = "";
  }

  title += `| ${REACT_APP_NAME}`;

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

  //FIXME: no esta funcionando el loading al hacer un nuevo search en search form

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="rating" content="General" />
      </Helmet>

      <SearchForm initialKeyword={keyword} initialRating={rating} />

      <div className="SearchResults">
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} loading={loading} />
      </div>
      <div id="visor" ref={ref}></div>
    </>
  );
}
