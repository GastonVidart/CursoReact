import React from "react";

import Gif from "../Gif";

export default function ListOfGifs({ gifs }) {
  //TODO: agregar estilos gifs
  return (
    <>
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </>
  );
}
