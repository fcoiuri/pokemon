import React from "react";
import { NavBar } from "./components/NavBar";
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
import { Box } from "@mui/material";
import { theme } from "./_utils/theme";
import { ThemeProvider } from "@mui/material";

export const App: React.FC = () => {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.body}>
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
