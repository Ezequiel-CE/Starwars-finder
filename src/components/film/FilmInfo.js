import Grid from "@mui/material/Grid";
import { FilmImage } from "./film.style";

const filmURL = "https://starwars-visualguide.com/assets/img/films/";

function romanize(num) {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

const FilmInfo = ({ movie, imgId }) => {
  const { episode_id, title, director, producer, release_date, opening_crawl } =
    movie;

  return (
    <Grid container sx={{ marginTop: "50px" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FilmImage src={`${filmURL}${imgId}.jpg`} alt={title}></FilmImage>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "rgba(226, 232, 240, 0.5)",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <h2>{`Episode ${romanize(episode_id)}: ${title}`}</h2>
        <p>Release date: {release_date}</p>
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <p>Opening Crawl:</p>
        <p>{opening_crawl}</p>
      </Grid>
    </Grid>
  );
};

export default FilmInfo;
