import React from "react";
import { api } from "../../_utils/api";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useStyles } from "./PokeCard.style";
import { useNavigate } from "react-router-dom";

interface PokeCardProps {
  name?: string;
  image?: string;
  id?: string;
}

export const PokeCard: React.FC<PokeCardProps> = ({ name, image, id }) => {
  const styles = useStyles();
  const navigate = useNavigate();

  // const showPokemons = api().then((poke) =>
  //   poke.slice(0, 20).map((data: any) => {
  //     setName(data.forms.name);
  //   })
  // );

  //   api().then((data) => setImage(data.sprites["front_default"]));

  return (
    <React.Fragment>
      <Card
        raised
        // sx={{
        //   maxWidth: 280,
        //   margin: "0 auto",
        //   padding: "0.1em",
        // }}
        className={styles.card}
      >
        <CardActionArea
          className={styles.cardClick}
          onClick={() => navigate(`/pokemon/${id}`)}
        >
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                className={styles.image}
                sx={{ objectFit: "contain" }}
                // style={{
                //   width: "auto",
                //   // marginRight: '100px',
                //   // maxHeight: "200px",
                // }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <CardContent>
                <Typography
                  variant="subtitle1"
                  component="div"
                >
                  {name}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};
