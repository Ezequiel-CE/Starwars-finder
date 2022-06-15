import { useEffect } from "react";
import { getFilmById } from "../api/films";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentFilm,
  setCurrentFilmLoding,
  setCurrentFilmError,
} from "../store/films-slice";
import Spiner from "../components/ui/Spiner";
import FilmInfo from "../components/film/FilmInfo";
import FilmCharacters from "../components/film/FilmCharacters";

const FilmPage = () => {
  const dispatcher = useDispatch();
  const { id } = useParams();
  const { currentFilm, currentFilmLoading, currentFilmError } = useSelector(
    (state) => state.films
  );
  console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      dispatcher(setCurrentFilmLoding(true));
      const movieInfo = await getFilmById(id);
      dispatcher(setCurrentFilm(movieInfo));
      dispatcher(setCurrentFilmLoding(false));
    };

    fetchMovie();
  }, [id, dispatcher]);

  return (
    <>
      {currentFilm && !currentFilmLoading && (
        <>
          <FilmInfo movie={currentFilm} imgId={id} />
          <FilmCharacters characters={currentFilm.characters} />
        </>
      )}
      {currentFilmLoading && <Spiner />}
    </>
  );
};

export default FilmPage;
