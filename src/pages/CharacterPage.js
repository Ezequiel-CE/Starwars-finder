import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCharactersByid } from "../api/characters";

const CharacterPage = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCharactersByid(id).then((data) => console.log(data));
  }, [id]);

  return <div> pagina de personaje</div>;
};

export default CharacterPage;
