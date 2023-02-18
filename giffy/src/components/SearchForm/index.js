import React, { useState } from "react";
import { useLocation } from "wouter";
import './SearchFrom.css'

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [ , pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="buscador">
        <label htmlFor="buscador" hidden>
          Buscador:
        </label>
        <input id="buscador" type="text" value={keyword} onChange={handleInputChange}></input>
        <button>Buscar</button>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);
