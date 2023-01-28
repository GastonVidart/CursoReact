import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifContexts";
import { getGifs } from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse]);

  return { loading, gifs };
}
