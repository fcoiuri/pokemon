import React from "react";
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

  return (
    <React.Fragment>
      <Card raised className={styles.card}>
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
                <Typography variant="subtitle1" component="div">
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
