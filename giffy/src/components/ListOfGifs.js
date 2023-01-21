import React, { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

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
    return (
      <div className="contSpinner">
        <span>Cargando</span>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </>
  );
}
