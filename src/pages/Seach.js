import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCharactersByName } from "../api/characters";
import CharacterGallery from "../components/characters/CharacterGallery";
import { setDataSearch, setLoadingSearch } from "../store/name-slice";
import { PaginationComponent } from "../components/ui/PaginationComponent";
import Spiner from "../components/ui/Spiner";

const Search = () => {
  const dispatcher = useDispatch();
  const { error, enteredSearch, data, loading } = useSelector(
    (state) => state.name
  );
  const [page, setPage] = useState(1);

  const handleChangePagination = (e, value) => {
    setPage(value);
  };

  let pages;
  const dataHasPages = data && (data.next || data.previous);
  if (dataHasPages) {
    pages = Math.ceil(data.count / 10);
  }

  useEffect(() => {
    dispatcher(setLoadingSearch(true));
    getCharactersByName(enteredSearch, page)
      .then((info) => {
        dispatcher(setDataSearch(info));
        dispatcher(setLoadingSearch(false));
      })
      .catch((err) => console.log(err));
  }, [enteredSearch, dispatcher, page]);

  return (
    <>
      {!loading && <CharacterGallery characters={data.results} />}
      {loading && <Spiner />}
      {dataHasPages && !loading && (
        <PaginationComponent
          page={page}
          pages={pages}
          handleChange={handleChangePagination}
        />
      )}
    </>
  );
};

export default Search;
