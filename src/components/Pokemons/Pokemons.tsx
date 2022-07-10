import React from "react";
import { api, apiPerRegion } from "../../_utils/api";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PokeCard } from "../PokeCard";
import { Grid } from "@mui/material";
import { useStyles } from "./Pokemons.style";
import { useLocation } from "react-router";

interface PokemonsProps {
  data?: any;
  // data?: Array<Object>;
}
export const Pokemons: React.FC<PokemonsProps> = ({ data }) => {
  const styles = useStyles();
  const { state } = useLocation();
  const [listPokemons, setListPokemons] = React.useState<any>([]);
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (state) {
      setListPokemons(state);
    } 
    else {
      apiPerRegion(0).then((data) => {
        setListPokemons(data);
      });
    }
  }, [state]);

  const indexOfPokemon = listPokemons?.map((data: any) => {
    return data.name;
  });

  const showPokemons = listPokemons?.map((data: any) => {
    return (
      <Grid item xs={4} className={styles.body}>
        <PokeCard
          key={data.name}
          name={data.name}
          image={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
          id={indexOfPokemon.indexOf(data.name) + 1}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {showPokemons}
      {/* {showPokemons} */}
      {/* <img src={image} alt="Pokemon" />; */}
    </Grid>
  );
};
