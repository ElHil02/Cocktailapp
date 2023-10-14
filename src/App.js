import React, { useState } from "react";
import "./App.css";
import CocktailList from "./CocktailList";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearch = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchPhrase}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <h1>Search cocktails</h1>
      <input
        type="text"
        id="search"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        placeholder="Search cocktail by name"
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
      <CocktailList cocktails={cocktails} />
    </div>
  );
}

export default App;
