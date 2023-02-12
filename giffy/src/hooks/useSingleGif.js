import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import useGlobalGifs from "./useGlobalGifs";

export function useSingleGif(gifId) {
  const gifs = useGlobalGifs();

  const [gif, setGif] = useState(null);

  useEffect(() => {
    const gifFromCache = gifs.find((gif) => gif.id === gifId);

    if (!gifFromCache) {
      getSingleGif(gifId).then((gif) => {
        setGif(gif);
      });
    } else {
      setGif(gifFromCache);
    }
  }, [gifId]);

  return gif;
}
