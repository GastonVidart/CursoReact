import React, { useCallback } from "react";
import { useLocation } from "wouter";

import ListOfGifs from "components/ListOfGifs";
import Trending from "components/Trending";
import SearchForm from "components/SearchForm";
import { useGifs } from "hooks/useGifs";

import "./Home.css";
import { Helmet } from "react-helmet";

const { REACT_APP_NAME } = process.env;

export default function Home() {
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    (keyword) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>{`Home | ${REACT_APP_NAME}`}</title>
      </Helmet>
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
