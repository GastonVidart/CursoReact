import React, { Suspense } from "react";
import "./App.css";
import "./components/Spinner/Spinner.css";

import { Link, Route } from "wouter";
import GifDetails from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifContexts";

const LazyHome = React.lazy(() => import("./pages/Home"));

function App() {
  //const [keyword, setKeyword] = useState("hi");
  return (
    <StaticContext.Provider value={{ name: "gaston", probando: true }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <h1>App</h1>
            </Link>

            <GifsContextProvider>
              <Route component={LazyHome} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={GifDetails} path="/gif/:gifId" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
