import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";

import './styles.css'

const POPULAR_GIFS = ["pandas", "matrix", "transformers"];

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
          <label htmlFor="buscador" hidden>Buscador:</label>
          <input
            id="buscador"
            type="text"
            value={keyword}
            onChange={handleInputChange}
          ></input>
          <button>Buscar</button>
        </div>
      </form>
      <h3>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif} style={{ listStyle: "none" }}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
      <h3> Última Búsqueda</h3>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </>
  );
}
