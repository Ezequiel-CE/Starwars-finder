import { CharaContainer } from "./characters.style";
import { Img } from "./characters.style";
import { Link } from "react-router-dom";

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

const CharacterCard = ({ data }) => {
  const { url } = data;

  const id = Number(url.split("/").slice(-2)[0]);

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/characters/${id}`}
    >
      <CharaContainer>
        <Img src={`${imgURL}${id}.jpg`} alt={data.name} />
        <p>{data.name}</p>
      </CharaContainer>
    </Link>
  );
};

export default CharacterCard;
