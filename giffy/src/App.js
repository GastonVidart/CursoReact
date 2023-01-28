import React from "react";
import "./App.css";
import "./components/Spinner/Spinner.css";

import { Link, Route } from "wouter";
import GifDetails from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifContexts";

function App() {
  //const [keyword, setKeyword] = useState("hi");
  return (
    <StaticContext.Provider value={{ name: "gaston", probando: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>App</h1>
          </Link>

          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={GifDetails} path="/gif/:gifId" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
