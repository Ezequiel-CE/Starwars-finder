import { PaginationComponent } from "../components/ui/PaginationComponent";
import { useEffect } from "react";
import { Title } from "../components/characters/characters.style";
import { getCharacters } from "../api/characters";
import CharacterGallery from "../components/characters/CharacterGallery";

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
  let pages;

  if (data && (data.next || data.previous)) {
    pages = Math.ceil(data.count / 10);
  }

  useEffect(() => {
    dispatcher(setLoadingChara(true));
    getCharacters(page)
      .then((info) => {
        dispatcher(setDataChara(info));
        dispatcher(setLoadingChara(false));
      })
      .catch((err) => console.log(err));
  }, [dispatcher, page]);

  const handleChangePagination = (event, value) => {
    dispatcher(setPageChara(value));
  };

  return (
    <div>
      <Title> Find your Characters</Title>
      {data && !loading && <CharacterGallery characters={data.results} />}
      {loading && <Spiner />}
      {data && !loading && (
        <PaginationComponent
          page={page}
          handleChange={handleChangePagination}
          pages={pages}
        />
      )}
    </div>
  );
};

export default Characters;
