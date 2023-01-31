import React from "react";
import './styles.css'

import Gif from "../Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="listOfGifs">
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </div>
  );
}
