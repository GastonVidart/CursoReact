import React from "react";
import './Gif.css'

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="gif">
      <h4>{title}</h4>
      <img src={url} alt={`Gif: ${title}`} />
    </a>
  );
}
