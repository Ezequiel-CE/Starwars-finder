import { useEffect } from "react";
import { Title } from "../components/characters/characters.style";
import { getCharacters } from "../api/characters";
import CharacterGallery from "../components/characters/CharacterGallery";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spiner from "../components/ui/Spiner";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataChara,
  setPageChara,
  setLoadingChara,
  setErrorChara,
} from "../store/character-slice";

const Characters = () => {
  const dispatcher = useDispatch();
  const { data, page, loading, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatcher(setLoadingChara(true));
    getCharacters(page)
      .then((info) => {
        dispatcher(setDataChara(info));
        dispatcher(setLoadingChara(false));
      })
      .catch((err) => console.log(err));
  }, [dispatcher, page]);

  const handleChange = (event, value) => {
    dispatcher(setPageChara(value));
  };

  return (
    <div>
      <Title> Find your Characters</Title>
      {data && !loading && <CharacterGallery characters={data.results} />}
      {loading && <Spiner />}
      {data && !loading && (
        <Stack spacing={2} sx={{ alignItems: "center", margin: "50px 0" }}>
          <Pagination page={page} count={9} onChange={handleChange} />
        </Stack>
      )}
    </div>
  );
};

export default Characters;
