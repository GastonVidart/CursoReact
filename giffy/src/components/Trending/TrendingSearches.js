import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import { getTrendingTerms } from "services/getTrendingTermsService";
import Spinner from "components/Spinner";

export default function TrendingSearches() {
  const [trendingTerms, setTrendingTerms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingTerms().then((trending) => {
      setTrendingTerms(trending);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h3 className="trending-title">Tendencias</h3>
      {loading ? (
        <Spinner />
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
