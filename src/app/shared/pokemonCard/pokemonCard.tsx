import * as React from "react";
import { Pokemon } from "../../../redux/actionTypes/pokemonActionTypes";
import styles from "./pokemonCard.module.css";

interface Props extends Pokemon {}

const PokemonCard: React.FC<Props> = ({
  baseExperience,
  height,
  name,
  sprite,
  weight,
}) => (
  <div className={styles.card}>
    <div className={styles.row}>
      <p>{`Name: ${name}`}</p>
      <p>{`Experience: ${baseExperience}`}</p>
    </div>
    <img src={sprite} alt={name} />
    <div className={styles.row}>
      <p>{`Height: ${(height * 0.1).toFixed(1)} m`}</p>
      <p>{`Weight: ${(weight * 0.1).toFixed(1)} kg`}</p>
    </div>
  </div>
);

export default PokemonCard;
