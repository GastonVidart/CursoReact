const { REACT_APP_API_KEY, REACT_APP_GIPHY_BASE_URL } = process.env;

export default function getSingleGif(gifId) {
  const url = `${REACT_APP_GIPHY_BASE_URL}/gifs/${gifId}?api_key=${REACT_APP_API_KEY}`;
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`Error al buscar Gif. Código: ${res.status}`);
      }
      return res.json();
    })
    .then((response) => {
      const { type, id, url: urlGif, title, images } = response.data;
      const { url } = images.downsized_medium;
      return { type, id, urlGif, title, url };
    });
}
