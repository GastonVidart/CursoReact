import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ title, id, url }) {
  return (
    <div className="gif">
      <Link data-testid="gif-link" to={`/gif/${id}`} className="gif-link">
        <img src={url} alt={`Gif: ${title}`} className="gif-image" />
        <span className="gif-label">{title}</span>
      </Link>
    </div>
  );
}

export default React.memo(Gif)
