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
import ErrorComponent from "../components/ui/ErrorComponent";

const FilmPage = () => {
  const dispatcher = useDispatch();
  const { id } = useParams();
  const { currentFilm, currentFilmLoading, currentFilmError } = useSelector(
    (state) => state.films
  );

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        dispatcher(setCurrentFilmLoding(true));
        const movieInfo = await getFilmById(id);
        dispatcher(setCurrentFilm(movieInfo));
        dispatcher(setCurrentFilmLoding(false));
        dispatcher(setCurrentFilmError(null));
      } catch (error) {
        dispatcher(setCurrentFilmLoding(false));
        dispatcher(setCurrentFilmError(error.message));
      }
    };

    fetchMovie();
  }, [id, dispatcher]);

  return (
    <>
      {currentFilmError && <ErrorComponent errorMsg={currentFilmError} />}
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
