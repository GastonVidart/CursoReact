import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(keyword);
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
