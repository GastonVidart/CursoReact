import React from "react";

import Gif from "components/Gif";
import useGlobalGifs from "hooks/useGlobalGifs";

export default function GifDetails({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((gif) => gif.id === params.gifId);

  return Boolean(gif) ? (
    <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
  ) : (
    <Gif title="Gif No Encontrado"></Gif>
  );
}
