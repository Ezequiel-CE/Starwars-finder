import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Img, Title } from "./character.style";
import { Link } from "react-router-dom";

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

const imgURLFilms = "https://starwars-visualguide.com/assets/img/films/";

const getFilmID = (string) => {
  const filmID = Number(string.split("/").slice(-2)[0]);
  return filmID;
};

const CharacterInfo = () => {
  const { data } = useSelector((state) => state.characterPage);
  const { url } = data;

  const id = Number(url.split("/").slice(-2)[0]);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Img src={`${imgURL}${id}.jpg`} alt={data.name} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Title>{data.name}</Title>
        <p>
          <strong>Birth year</strong> : {data.birth_year}
        </p>

        <p>
          <strong>Height</strong> : {data.height}cm
        </p>
        <p>
          <strong>Mass</strong>: {data.mass}kg
        </p>
        <p>
          <strong>Gender</strong>: {data.gender}
        </p>
        <p>
          <strong>Hair color</strong>: {data.hair_color}
        </p>
        <p>
          <strong>Skin color</strong>: {data.skin_color}
        </p>
        <div>
          <p>
            <strong>Related films:</strong>:
          </p>
          {data.films.map((film, i) => (
            <Link to={`/films/${getFilmID(film)}`}>
              <img
                src={`${imgURLFilms}${getFilmID(film)}.jpg`}
                alt="homeworld planet"
                height="150"
                key={i}
                style={{ padding: "3px" }}
              />
            </Link>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default CharacterInfo;
