import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

import { getTrendingTerms } from "services/getTrendingTermsService";
import "./Trending.css";

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

function useNearScreen() {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    Promise.resolve(IntersectionObserver ?? import("intersection-observer")).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: "200px",
      });

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return <div ref={fromRef}>{isNearScreen ? <Trending /> : null}</div>;
}
