import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import CocktailDetails from "./pages/CocktailDetails";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

import Axios from "axios";
import Cocktails from "./components/Cocktail";

import { Route, Switch } from "react-router-dom";
function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loadCocktails, setLoadCocktails] = useState(true);
  const getCocktail = () => {
    Axios.get("https://www.thecocktaildb.com/api.php")
      .then((res) => {
        setCocktails(res.data.Drink);
        setLoadCocktails(false);
      })
      .catch((err) => console.err(err));
  };
  useEffect(() => {
    getCocktail();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/"
          render={() => (
            <Home Cocktails={Cocktails} loadCocktails={loadCocktails} />
          )}
        />

        <Route path="/aboutus" component={AboutUs} />
        <Route
          path="/cocktails/:idDrink"
          render={(props) => (
            <CocktailDetails {...props} cocktails={cocktails} />
          )}
        />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
