import { CharaContainer } from "./characters.style";
import { Img } from "./characters.style";

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

const CharacterCard = ({ data }) => {
  const { url } = data;

  const id = Number(url.split("/").slice(-2)[0]);

  return (
    <CharaContainer>
      <Img src={`${imgURL}${id}.jpg`} alt={data.name} />
      <p>{data.name}</p>
    </CharaContainer>
  );
};

export default CharacterCard;
