import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

function App() {
  //const [keyword, setKeyword] = useState("hi");
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de Pandas</Link>
        <Link to="/gif/matrix">Gifs de Matrix</Link>
        <Link to="/gif/transformers">Gifs de Transformers</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
