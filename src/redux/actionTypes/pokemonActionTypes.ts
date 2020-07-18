import { ThunkType } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface Pokemon {
  height: number;
  weight: number;
  sprite: string;
  name: string;
  baseExperience: number;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchPokemon = (pokemonId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILED = "FETCH_POKEMON_FAILED";

export const FETCH_RANDOM_POKEMON_START = "FETCH_RANDOM_POKEMON_START";
export const FETCH_RANDOM_POKEMON_SUCCESS = "FETCH_RANDOM_POKEMON_SUCCESS";
export const FETCH_RANDOM_POKEMON_FAILED = "FETCH_RANDOM_POKEMON_FAILED";

// ------ TYPES ------ //
interface FetchPokemonSuccess {
  type: typeof FETCH_POKEMON_SUCCESS;
  data: any;
}

interface FetchRandomPokemonSuccess {
  type: typeof FETCH_RANDOM_POKEMON_SUCCESS;
  data: any;
}

export type Types = FetchPokemonSuccess | FetchRandomPokemonSuccess;
