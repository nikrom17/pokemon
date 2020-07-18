import * as pokemonActionTypes from "../actionTypes/pokemonActionTypes";
import { GenericThunkAction } from "../actionTypes/commonTypes";
import {
  getRandomNumberWithRestrictions,
  genOneStarters,
} from "../../utils/utils";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// ------ SIMPLE ACTIONS ------ //
export const fetchPokemonStart = () => ({
  type: pokemonActionTypes.FETCH_POKEMON_START,
});

export const fetchPokemonSuccess = (data: any) => ({
  type: pokemonActionTypes.FETCH_POKEMON_SUCCESS,
  data,
});

export const fetchPokemonFailed = () => ({
  type: pokemonActionTypes.FETCH_POKEMON_FAILED,
});

export const fetchRandomPokemonStart = () => ({
  type: pokemonActionTypes.FETCH_RANDOM_POKEMON_START,
});

export const fetchRandomPokemonSuccess = (data: any) => ({
  type: pokemonActionTypes.FETCH_RANDOM_POKEMON_SUCCESS,
  data,
});

export const fetchRandomPokemonFailed = () => ({
  type: pokemonActionTypes.FETCH_RANDOM_POKEMON_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

export const fetchPokemon: pokemonActionTypes.FetchPokemon = (
  pokemonId
) => async (dispatch) => {
  try {
    dispatch(fetchPokemonStart());
    const response = await fetch(`${BASE_URL}/${pokemonId}`);
    const json = await response.json();
    dispatch(fetchPokemonSuccess(json));
  } catch (error) {
    dispatch(fetchPokemonFailed());
    //todo handle error
  }
};

export const fetchRandomPokemon: GenericThunkAction = () => async (
  dispatch
) => {
  try {
    dispatch(fetchRandomPokemonStart());
    const response = await fetch(
      `${BASE_URL}/${getRandomNumberWithRestrictions(2, 151, genOneStarters)}`
    );
    const json = await response.json();
    dispatch(fetchRandomPokemonSuccess(json));
  } catch (error) {
    dispatch(fetchRandomPokemonFailed());
    //todo handle error
  }
};
