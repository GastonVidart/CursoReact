import React, { useEffect, useState } from "react";
import { getGifs } from "../../services/getGifs";

import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Spinner";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);

  const [gifs, setGifs] = useState([""]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return <Spinner />;
  }

  return loading ? <Spinner /> : <ListOfGifs gifs={gifs} />;
}
