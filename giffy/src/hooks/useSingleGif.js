import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import useGlobalGifs from "./useGlobalGifs";

export function useSingleGif(gifId) {
  const gifs = useGlobalGifs();

  const [gif, setGif] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const gifFromCache = gifs.find((gif) => gif.id === gifId);
    if (!gifFromCache) {
      getSingleGif(gifId)
        .then((gif) => {
          setGif(gif);
          setIsError(false);
        })
        .catch((e) => setIsError(true))
        .finally(() => setIsLoading(false));
    } else {
      setGif(gifFromCache);
      setIsLoading(false);
    }
  }, [gifId]);

  return { gif, isLoading, isError };
}
