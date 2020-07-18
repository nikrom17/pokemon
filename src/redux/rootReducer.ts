import { combineReducers } from "redux";
import {
  initialPokemonState,
  pokemonReducer,
  PokemonState,
} from "./reducers/pokemonReducer";

export interface AppState {
  pokemon: PokemonState;
}

export const initialAppState: AppState = {
  pokemon: { ...initialPokemonState },
};

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});
