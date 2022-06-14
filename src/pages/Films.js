import { TitleFilms } from "../components/films/films.style";
import { useEffect } from "react";
import { getAllFilms } from "../api/films";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataFilm,
  setErrorFilm,
  setLoadingFilm,
  setCurrentFilm,
} from "../store/films-slice";
import Spiner from "../components/ui/Spiner";
import FilmsGallery from "../components/films/FilmsGallery";

const Films = () => {
  const dispatcher = useDispatch();
  const { data, loading, error, currentFilm } = useSelector(
    (state) => state.films
  );

  useEffect(() => {
    const fetchMovies = async () => {
      dispatcher(setLoadingFilm(true));
      const filmsData = await getAllFilms();
      dispatcher(setDataFilm(filmsData));
      dispatcher(setLoadingFilm(false));
    };

    try {
      fetchMovies();
    } catch (error) {
      console.log(error);
    }
  }, [dispatcher]);

  return (
    <>
      <TitleFilms>Star Wars Films</TitleFilms>
      {loading && <Spiner />}
      {data && !loading && <FilmsGallery movies={data.results} />}
    </>
  );
};

export default Films;
