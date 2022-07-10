import React from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./Pokemon.style";
import { apiPerId } from "../../_utils/api";



interface PokemonProps {
  name?: string;
  url?: string;
}

export const Pokemon: React.FC<PokemonProps> = ({ name, url }) => {
  const styles = useStyles();
  const { id } = useParams();
  const [poke, setPoke] = React.useState<any>([]);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`


  React.useEffect(() => {
    apiPerId(id!).then((data) => setPoke(data));
  }, [id]);

  return (
    <React.Fragment>
      <div>
        olá
        {poke.name}
      </div>
      <img src={image} alt="Pokemon" />
    </React.Fragment>
  );
};
