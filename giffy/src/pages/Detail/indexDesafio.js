import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { getGif } from "../../services/getGifs";

export default function GifDetails({ params }) {
  const { gifId } = params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [gif, setGif] = useState({});

  useEffect(() => {
    setLoading(true);
    setError("");
    getGif(gifId)
      .then((gif) => {
        setGif(gif);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [gifId]);

  if (loading) {
    return <Spinner />;
  } else if (Boolean(error)) {
    return <span className="errorDetalles">{error}</span>;
  }

  const { type, id, url, title, urlGif } = gif;

  return (
    <div className="detalles">
      <h4>{title}</h4>
      {/*TODO: onLoad img */}
      <img src={urlGif} alt="Gif"></img>
      <div className="contDetalles">
        <div className="itemDetalle">
          <span>Gif Id:</span>
          <span>{id}</span>
        </div>

        <div className="itemDetalle">
          <span>Tipo:</span>
          <span>{type}</span>
        </div>

        <div className="itemDetalle">
          <span>Url:</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </div>
      </div>
    </div>
  );
}
