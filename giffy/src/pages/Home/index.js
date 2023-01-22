import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["pandas", "matrix", "transformers"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`)
  };

  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <label htmlFor="buscador">Buscador:</label>
          <input
            id="buscador"
            style={{ height: "auto" }}
            type="text"
            value={keyword}
            onChange={handleInputChange}
          ></input>
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
    </>
  );
}
