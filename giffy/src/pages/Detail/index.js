import React from "react";

import Gif from "components/Gif";
import { useSingleGif } from "hooks/useSingleGif";

export default function GifDetails({ params }) {
  const gif = useSingleGif(params.gifId);

  return Boolean(gif) ? (
    <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
  ) : (
    <Gif title="Gif No Encontrado"></Gif>
  );
}
