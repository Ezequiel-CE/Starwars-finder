import { FilmContainer, FilmImg } from "./films.style";
import { Link } from "react-router-dom";

const filmURL = "https://starwars-visualguide.com/assets/img/films/";

const FilmCard = ({ movie }) => {
  const { title, url } = movie;
  const id = Number(url.split("/").slice(-2)[0]);

  return (
    <FilmContainer>
      <Link to={`/films/${id}`} style={{ textDecoration: "none" }}>
        <FilmImg src={`${filmURL}${id}.jpg`} alt={title} />
      </Link>
    </FilmContainer>
  );
};

export default FilmCard;
