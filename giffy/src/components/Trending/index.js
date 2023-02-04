import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import { getTrendingTerms } from "services/getTrendingTermsService";
import './styles.css'

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
      <h3>Los gifs más populares</h3>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <ul className="lista">
          {trendingTerms.map((popularGif) => (
            <li key={popularGif} style={{ listStyle: "none" }}>
              <Link to={`/search/${popularGif}`}>{popularGif}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
