import Grid from "@mui/material/Grid";
import { CharaFilmImg } from "./film.style";
import { Link } from "react-router-dom";

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

const FilmCharacters = ({ characters }) => {
  return (
    <>
      <h3>Characters:</h3>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        {characters.map((cha, i) => {
          const characterID = Number(cha.split("/").slice(-2)[0]);
          return (
            <Grid key={i} item md={1}>
              <Link to={`/characters/${characterID}`}>
                <CharaFilmImg
                  src={`${imgURL}${characterID}.jpg`}
                  alt={characterID}
                />
              </Link>
            </Grid>
          );
        })}{" "}
      </Grid>
    </>
  );
};

export default FilmCharacters;
