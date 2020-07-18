import { DefaultSchema } from "../actionTypes/commonTypes";
import * as pokemonActionType from "../actionTypes/pokemonActionTypes";
import { genOneStarters } from "../../utils/utils";

export interface PokemonState {
  pokemon: DefaultSchema;
}
export const initialPokemonState: PokemonState = {
  pokemon: {
    allIds: [],
    byId: {},
  },
};

export const pokemonReducer = (
  state = initialPokemonState,
  action: pokemonActionType.Types
): PokemonState => {
  switch (action.type) {
    case pokemonActionType.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: {
          allIds: [...state.pokemon.allIds, action.data.id],
          byId: {
            ...state.pokemon.byId,
            [action.data.id]: {
              height: action.data.height,
              weight: action.data.weight,
              sprite: action.data.sprites.front_default,
              name: action.data.name,
              baseExperience: action.data.base_experience,
            },
          },
        },
      };
    case pokemonActionType.FETCH_RANDOM_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: {
          allIds: [...genOneStarters, action.data.id],
          byId: {
            ...state.pokemon.byId,
            [action.data.id]: {
              height: action.data.height,
              weight: action.data.weight,
              sprite: action.data.sprites.front_default,
              name: action.data.name,
              baseExperience: action.data.base_experience,
            },
          },
        },
      };
    default:
      return state;
  }
};
