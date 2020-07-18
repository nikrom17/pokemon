import * as React from "react";
import { connect } from "react-redux";
import { FetchPokemon } from "../../../redux/actionTypes/pokemonActionTypes";
import { DefaultSchema } from "../../../redux/actionTypes/commonTypes";
import { genOneStarters } from "../../../utils/utils";
import { AppState } from "../../../redux/rootReducer";
import * as pokemonActions from "../../../redux/actions/pokemonActions";
import PokemonCard from "../../shared/pokemonCard/pokemonCard";
import styles from "./pokemonContainer.module.css";

interface StateProps {
  pokemon: DefaultSchema;
}

interface Props extends StateProps {
  fetchPokemon: FetchPokemon;
}

const PokemonContainer: React.FC<Props> = ({ fetchPokemon, pokemon }) => {
  React.useEffect(() => {
    genOneStarters.forEach((pokemonId) => fetchPokemon(pokemonId));
  }, [fetchPokemon]);

  const renderAllPokemon = (pokemon: DefaultSchema): React.ReactNode[] => {
    return pokemon.allIds.map((pokemonId) => {
      // @ts-ignore
      const { height, weight, sprite, name, baseExperience } = pokemon.byId[
        pokemonId
      ];

      return (
        <PokemonCard
          key={name}
          baseExperience={baseExperience}
          height={height}
          name={name}
          sprite={sprite}
          weight={weight}
        />
      );
    });
  };

  return <div className={styles.container}>{renderAllPokemon(pokemon)}</div>;
};

const mapStateToProps = (state: AppState): StateProps => ({
  pokemon: state.pokemon.pokemon,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchPokemon: (pokemonId: number) =>
    dispatch(pokemonActions.fetchPokemon(pokemonId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
