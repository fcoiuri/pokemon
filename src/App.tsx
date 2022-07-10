import React from "react";
import { AppBaar } from "./components/AppBar";
import { Cardd } from "./components/Cardd";
import { Pokemons } from "./components/Pokemons";
import { Pokemon } from "./components/Pokemon";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useStyles } from "./App.style";
import { Box  } from "@mui/material";
import { theme } from "./_utils/theme";
import { ThemeProvider } from "@mui/material";

export const App = () => {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.body}>
        <Router basename={process.env.PUBLIC_URL}>
          <AppBaar />
          <Routes>
            {/* <React.Fragment> */}
            {/* Olá
      <div>Feijao</div>
            {/* <Card /> */}
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            {/* <Route path="/feijao" element={<Pokemon />} /> */}
            {/* </React.Fragment> */}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
