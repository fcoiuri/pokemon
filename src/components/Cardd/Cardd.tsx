import React, { ChangeEvent } from "react";
import { apiPerName } from "../../_utils/api";
import TextField from "@mui/material/TextField";

export const Cardd = () => {
  const [image, setImage] = React.useState("");
  const [search, setSearch] = React.useState("");

  apiPerName(search).then((data) => setImage(data.sprites["front_default"]));

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleChangeSearch}
      />
      <img src={image} alt="Pokemon" />
    </div>
  );
};
