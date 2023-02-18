import React from "react";

import ListOfGifs from "components/ListOfGifs";
import Trending from "components/Trending";
import SearchForm from "components/SearchForm";
import { useGifs } from "hooks/useGifs";

import "./Home.css";
import { Helmet } from "react-helmet";

const { REACT_APP_NAME } = process.env;

export default function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>{`Home | ${REACT_APP_NAME}`}</title>
      </Helmet>

      <SearchForm />

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
