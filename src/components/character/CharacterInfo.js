import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
const imgURLPlanet = "https://starwars-visualguide.com/assets/img/planets/";
const imgURLFilms = "https://starwars-visualguide.com/assets/img/films/";

const getFilmID = (string) => {
  const filmID = Number(string.split("/").slice(-2)[0]);
  return filmID;
};

const CharacterInfo = () => {
  const { data } = useSelector((state) => state.characterPage);
  const { url, homeworld } = data;

  const id = Number(url.split("/").slice(-2)[0]);
  const worldId = Number(homeworld.split("/").slice(-2)[0]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <img src={`${imgURL}${id}.jpg`} alt={data.name} />
      </Grid>
      <Grid item xs={12} md={6}>
        <h2>{data.name}</h2>
        <p>Birth year: {data.birth_year}</p>
        <p>Species: {data.species}</p>
        <p>Height: {data.height}cm</p>
        <p>Mass: {data.mass}kg</p>
        <p>Gender: {data.gender}</p>
        <p>Hair color: {data.hair_color}</p>
        <p>Skin color: {data.skin_color}</p>
        <div>
          <p>Homeworld:</p>
          <img
            src={`${imgURLPlanet}${worldId}.jpg`}
            alt="homeworld planet"
            height="100"
          />
        </div>
        <div>
          <p>Related Films:</p>
          {data.films.map((film, i) => (
            <img
              src={`${imgURLFilms}${getFilmID(film)}.jpg`}
              alt="homeworld planet"
              height="200"
              key={i}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default CharacterInfo;
