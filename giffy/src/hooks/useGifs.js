import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifContexts";
import getGifs from "../services/getGifs";

const PAGINA_INICIAL = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [pagina, setPagina] = useState(PAGINA_INICIAL);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  const paginaSiguiente = () => {
    setPagina((pagina) => pagina + 1);
  };

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse, rating, setGifs]);

  useEffect(() => {
    if (pagina === PAGINA_INICIAL) return;
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating, pagina })
      .then((gifs) => setGifs((prevGifs) => prevGifs.concat(gifs)))
      .finally(() => setLoading(false));
  }, [keywordToUse, rating, pagina, setGifs]);

  return { loading, gifs, rating, paginaSiguiente };
}
