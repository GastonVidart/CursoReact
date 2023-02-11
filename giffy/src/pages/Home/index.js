import React from "react";
import { useLocation } from "wouter";

import ListOfGifs from "components/ListOfGifs";
import Trending from "components/Trending";
import SearchForm from "components/SearchForm";
import { useGifs } from "hooks/useGifs";

import "./Home.css";

export default function Home() {
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (keyword) => {
    pushLocation(`/search/${keyword}`);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

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
