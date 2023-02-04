import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import { getTrendingTerms } from "services/getTrendingTermsService";
import './Trending.css'

export default function Trending() {
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
              <Link className="trending-link" to={`/search/${popularGif}`}>{popularGif}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
