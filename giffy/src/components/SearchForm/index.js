import React, { useReducer, useState } from "react";
import { useLocation } from "wouter";
import "./SearchFrom.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "keyword",
  UPDATE_RATING: "rating",
};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.UPDATE_KEYWORD: {
      return { ...state, keyword: action.payload, times: state.times + 1 };
    }
    case ACTIONS.UPDATE_RATING: {
      return { ...state, rating: action.payload };
    }
    default:
      return state;
  }
};

function SearchForm({ initialKeyword = "", initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, rating, times } = state;

  const [, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //FIXME: keyword vacía, no matchea el router
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleInputChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };

  const handleRatingChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value });
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
        <span>{times}</span>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);
