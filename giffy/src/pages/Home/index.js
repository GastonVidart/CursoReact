import React, { useState } from "react";
import { useLocation } from "wouter";

import ListOfGifs from "components/ListOfGifs";
import Trending from "components/Trending";
import { useGifs } from "hooks/useGifs";

import "./Home.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="buscador">
          <label htmlFor="buscador" hidden>
            Buscador:
          </label>
          <input id="buscador" type="text" value={keyword} onChange={handleInputChange}></input>
          <button>Buscar</button>
        </div>
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3> Última Búsqueda</h3>
          <ListOfGifs gifs={gifs} loading={loading} />
        </div>
        <div className="App-category">
          <Trending />
        </div>
      </div>
    </>
  );
}
