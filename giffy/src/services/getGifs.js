const API_KEY = "irC0d6izVLwB1jy91fRpJnE6zja9Fddj";

export default function getGifs({ keyword = "not found" } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { title, id, images } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      }
    });
}
