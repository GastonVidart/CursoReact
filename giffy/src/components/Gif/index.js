import React from "react";
import { Link } from "wouter";
import './Gif.css'

export default function Gif({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`} className="gif">
      <h4>{title}</h4>
      <img src={url} alt={`Gif: ${title}`} />
    </Link>
  );
}
