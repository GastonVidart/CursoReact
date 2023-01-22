import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["pandas", "matrix", "transformers"];

export default function Home() {
  return (
    <>
      <h3>Los gifs más popuulares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif} style={{listStyle:"none"}}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
