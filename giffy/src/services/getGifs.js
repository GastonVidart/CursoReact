const { REACT_APP_API_KEY, REACT_APP_GIPHY_BASE_URL } = process.env;
const LIMIT = 10;

export default function getGifs({ keyword = "not found", rating = "g", pagina = 0 } = {}) {
  const url = `${REACT_APP_GIPHY_BASE_URL}/gifs/search?api_key=${REACT_APP_API_KEY}&q=${keyword}&limit=${LIMIT}&offset=${
    pagina * LIMIT
  }&rating=${rating}&lang=en`;

  return fetch(url)
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
