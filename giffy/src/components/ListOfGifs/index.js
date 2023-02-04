import React from "react";
import './ListOfGifs.css'

import Gif from "components/Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="listOfGifs">
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </div>
  );
}
