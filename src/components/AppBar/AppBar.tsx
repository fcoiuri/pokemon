import * as React from "react";
import { useStyles } from "./NavBar.style";
import pokemonLogo from "./../../_assets/imgs/pokemon.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { apiPerRegion } from "../../_utils/api";
import { useNavigate } from "react-router-dom";

const regions = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const AppBaar = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [region, setRegion] = React.useState(0);
  const [listPokemons, setListPokemons] = React.useState<any>([]);

  React.useEffect(() => {
    apiPerRegion(region).then((data) => setListPokemons(data));
  }, [region]);

  //   const showPokemons = listPokemons.map((d: any) => {
  //     return (
  //       <PokeCard
  //         name={d.name}
  //         key={d.name}
  //         image={`https://img.pokemondb.net/artwork/large/${d.name}.jpg`}
  //         id={d.name + 1}
  //       />
  //     );
  //   });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setRegion(regions.indexOf(event.currentTarget.innerText));
    // handleCloseNavMenu();
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

   React.useMemo(() => {
    navigate("/", { state: listPokemons });
  },[listPokemons, navigate]);

  return (
    <>
      <AppBar position="static" className={styles.navbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
              <img
                src={pokemonLogo}
                alt="Pokemon logo"
                className={styles.logo}
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
                <img
                  src={pokemonLogo}
                  alt="Pokemon logo"
                  className={styles.logo}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                // onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {regions.map((region, index) => (
                  <MenuItem key={index} onClick={handleClick}>
                    <Typography textAlign="center">{region}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {regions.map((region, index) => (
                <Button
                  key={index}
                  onClick={handleClick}
                  sx={{ my: 2, mx: 1, color: "white", display: "block" }}
                >
                  <Typography>{region}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* {showPokemons} */}
    </>
  );
};
