import React from "react";
import ListCocktail from "../components/ListCocktail";

function Home({ cocktails, loadCocktails }) {
  return (
    <div>
      <ListCocktail cocktails={cocktails} loadCocktails={loadCocktails} />{" "}
    </div>
  );
}

export default Home;
