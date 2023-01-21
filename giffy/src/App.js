import React, { useState } from "react";
import "./App.css";
import "./components/Spinner.css";
import ListOfGifs from "./pages/ListOfGifs";

import { Link, Route } from "wouter";
import GifDetails from "./pages/GifDetails";

function App() {
  //const [keyword, setKeyword] = useState("hi");
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gifs/panda">Gifs de Pandas</Link>
        <Link to="/gifs/matrix">Gifs de Matrix</Link>
        <Link to="/gifs/transformers">Gifs de Transformers</Link>
        <Route component={ListOfGifs} path="/gifs/:keyword" />
        <Route component={GifDetails} path="/gif/:gifId" />
      </section>
    </div>
  );
}

export default App;
