import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCharactersByid } from "../api/characters";
import CharacterInfo from "../components/character/CharacterInfo";
import Spiner from "../components/ui/Spiner";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataCharaPage,
  setErrorCharaPage,
  setLoadingCharaPage,
} from "../store/characterPage-slice";

const CharacterPage = () => {
  const dispatcher = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.characterPage);

  useEffect(() => {
    dispatcher(setLoadingCharaPage(true));
    getCharactersByid(id)
      .then((data) => {
        dispatcher(setDataCharaPage(data));
        dispatcher(setLoadingCharaPage(false));
      })
      .catch((error) => {});
  }, [id, dispatcher]);

  return (
    <>
      {data && !loading && <CharacterInfo />}
      {loading && <Spiner />}
    </>
  );
};

export default CharacterPage;
