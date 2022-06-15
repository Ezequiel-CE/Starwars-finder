import Grid from "@mui/material/Grid";
import { CharaFilmImg } from "./film.style";
import { Link } from "react-router-dom";

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

const FilmCharacters = ({ characters }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(226, 232, 240, 0.5)",
        borderRadius: "5px",
        padding: "10px",
        margin: "50px 0",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Characters</h3>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignitems: "center",
          width: "100%",
          gap: "10px",
        }}
      >
        {characters.map((cha, i) => {
          const characterID = Number(cha.split("/").slice(-2)[0]);
          return (
            <Grid
              key={i}
              item
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
    </div>
  );
};

export default FilmCharacters;
