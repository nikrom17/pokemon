import * as React from "react";
import { connect } from "react-redux";
import { GenericThunkAction } from "../../../redux/actionTypes/commonTypes";
import * as pokemonActions from "../../../redux/actions/pokemonActions";
import Button from "../../shared/button/button";
import styles from "./header.module.css";

interface Props {
  fetchRandomPokemon: () => GenericThunkAction;
}

const Header: React.FC<Props> = ({ fetchRandomPokemon }) => (
  <header className={styles.header}>
    <Button label="Fetch random pokemon" onClick={fetchRandomPokemon} />
  </header>
);

const mapDispatchToProps = (dispatch: any) => ({
  fetchRandomPokemon: () => dispatch(pokemonActions.fetchRandomPokemon()),
});

export default connect(null, mapDispatchToProps)(Header);
