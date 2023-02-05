import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import { getTrendingTerms } from "services/getTrendingTermsService";
import "./Trending.css";
import useNearScreen from "hooks/useNearScreen";

function Trending() {
  const [trendingTerms, setTrendingTerms] = useState([]);
  const [loading, setLoading] = useState(false);

  //TODO: agregar estilos para que vaya al costado der y demás como en el video

  useEffect(() => {
    setLoading(true);
    getTrendingTerms().then((trending) => {
      setTrendingTerms(trending);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h3 className="trending-title">Los gifs más populares</h3>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <ul className="trending-list">
          {trendingTerms.map((popularGif) => (
            <li key={popularGif}>
              <Link className="trending-link" to={`/search/${popularGif}`}>
                {popularGif}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return <div ref={fromRef}>{isNearScreen ? <Trending /> : null}</div>;
}
