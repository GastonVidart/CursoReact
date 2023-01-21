const API_KEY = "irC0d6izVLwB1jy91fRpJnE6zja9Fddj";

function getGifs({ keyword = "not found" } = {}) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
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
  const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`;
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
