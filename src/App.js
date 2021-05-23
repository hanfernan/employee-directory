import React from "react";
import SearchResultContainer from "./components/SearchResultsContainer";
import Header from "./components/Header"

function App() {
  return (
    <div className="app">
      <Header />
      <SearchResultContainer/>
    </div>
  );
}

export default App;
