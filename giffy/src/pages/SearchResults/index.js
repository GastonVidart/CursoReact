import React, { useEffect, useState } from "react";
import { getGifs } from "../../services/getGifs";

import Gif from "../../components/Gif/Gif";
import Spinner from "../../components/Spinner/Spinner";

export default function ListOfGifs({ params }) {
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

  return (
    <>
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </>
  );
}
