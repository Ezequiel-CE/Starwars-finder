import { TitleFilms } from "../components/films/films.style";
import { useEffect } from "react";
import { getAllFilms } from "../api/films";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataFilm,
  setErrorFilm,
  setLoadingFilm,
} from "../store/films-slice";
import Spiner from "../components/ui/Spiner";
import FilmsGallery from "../components/films/FilmsGallery";
import ErrorComponent from "../components/ui/ErrorComponent";

const Films = () => {
  const dispatcher = useDispatch();
  const { data, loading, error } = useSelector((state) => state.films);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        dispatcher(setLoadingFilm(true));
        const filmsData = await getAllFilms();
        dispatcher(setDataFilm(filmsData));
        dispatcher(setLoadingFilm(false));
        dispatcher(setErrorFilm(null));
      } catch (error) {
        dispatcher(setLoadingFilm(false));
        dispatcher(setErrorFilm(error.message));
      }
    };

    fetchMovies();
  }, [dispatcher]);

  return (
    <>
      {error && !loading && <ErrorComponent errorMsg={error} />}
      {loading && <Spiner />}
      {data && !loading && (
        <>
          <TitleFilms>Star Wars Films</TitleFilms>{" "}
          <FilmsGallery movies={data.results} />{" "}
        </>
      )}
    </>
  );
};

export default Films;
