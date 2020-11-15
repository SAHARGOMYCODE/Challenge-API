import React from "react";
import SingleCocktail from "./SingleCocktail";
import LinearProgress from "@material-ui/core/LinearProgress";
import Erros from "../pages/Error";
function ListCocktail({ cocktails, loadCocktails }) {
  return (
    <div>
      {loadCocktails ? (
        <LinearProgress />
      ) : cocktails == null ? (
        <Erros />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
            margin: "5% 30%",
          }}
        >
          {cocktails.map((el) => (
            <SingleCocktail key={el.idDrink} cocktail={el} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListCocktail;
