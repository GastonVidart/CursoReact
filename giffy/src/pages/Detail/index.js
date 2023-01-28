import React, { useContext } from "react";
import Gif from "../../components/Gif";
import GifContext from "../../context/GifContexts";

export default function GifDetails({ params }) {
  const { gifs } = useContext(GifContext);

  const gif = gifs.find((gif) => gif.id === params.gifId);

  return Boolean(gif) ? (
    <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
  ) : (
    <Gif title="Gif No Encontrado"></Gif>
  );
}
