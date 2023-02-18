import React, { useState } from "react";
import { useLocation } from "wouter";
import "./SearchFrom.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({initialKeyword = "", initialRating}) {
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = useState(initialRating);

  const [, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //FIXME: keyword vacía, no matchea el router
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="buscador">
        <label htmlFor="buscador" hidden>
          Buscador:
        </label>
        <input id="buscador" type="text" value={keyword} onChange={handleInputChange}></input>
        <select value={rating} onChange={handleRatingChange}>
          <option disabled>Rating Type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}{" "}
        </select>
        <button>Buscar</button>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);
