const { REACT_APP_API_KEY, REACT_APP_GIPHY_BASE_URL } = process.env;

function getTrendingTerms() {
  const url = `${REACT_APP_GIPHY_BASE_URL}/trending/searches?api_key=${REACT_APP_API_KEY}`;
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`Error al buscar Trending Terms. Código: ${res.status}`);
      }
      return res.json();
    })
    .then((response) => {
      return response.data;
    });
}

export { getTrendingTerms };
