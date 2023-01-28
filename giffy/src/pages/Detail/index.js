import React, { useContext } from "react";
import GifContext from "../../context/GifContexts"

export default function GifDetails({ params }) {
  const {gifs} = useContext(GifContext)
  console.log("🚀[TESTING] || GifDetails || gifs", gifs)

  return <h1>Gif con id {params.gifId}</h1>;
}
