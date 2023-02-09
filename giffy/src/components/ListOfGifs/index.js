import React from "react";
import "./ListOfGifs.css";

import Gif from "components/Gif";
import Spinner from "components/Spinner";

export default function ListOfGifs({ gifs, loading }) {
  return (
    <div className="listOfGifs">
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
      {loading && <Spinner />}
    </div>
  );
}
