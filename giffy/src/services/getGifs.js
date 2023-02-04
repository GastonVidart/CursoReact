const { REACT_APP_API_KEY, REACT_APP_GIPHY_BASE_URL } = process.env;

function getGifs({ keyword = "not found" } = {}) {
  const url = `${REACT_APP_GIPHY_BASE_URL}/gifs/search?api_key=${REACT_APP_API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
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

function getGif(gifId) {
  const url = `${REACT_APP_GIPHY_BASE_URL}/gifs/${gifId}?api_key=${REACT_APP_API_KEY}`;
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`Error al buscar Gif. Código: ${res.status}`);
      }
      return res.json();
    })
    .then((response) => {
      const { type, id, url, title, images } = response.data;
      const { url: urlGif } = images.downsized_medium;
      return { type, id, url, title, urlGif };
    });
}

export { getGifs, getGif };
