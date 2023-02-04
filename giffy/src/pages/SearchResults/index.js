import React from "react";

import { useGifs } from "hooks/useGifs";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  //TODO: optimizacion renders

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
