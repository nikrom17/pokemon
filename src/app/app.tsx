import * as React from "react";
import Header from "./components/header/header";
import "./app.css";
import PokemonContainer from "./components/pokemonContainer/pokemonContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <PokemonContainer />
    </div>
  );
};

export default App;
