import React from "react";

export default function CocktailList({ cocktails }) {
  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </div>
      ))}
    </div>
  );
}
