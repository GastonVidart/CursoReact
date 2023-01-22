import React from "react";
import "./App.css";
import "./components/Spinner/Spinner.css";

import { Link, Route } from "wouter";
import GifDetails from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

function App() {
  //const [keyword, setKeyword] = useState("hi");
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/"><h1>App</h1></Link>
        
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={GifDetails} path="/gif/:gifId" />
      </section>
    </div>
  );
}

export default App;
