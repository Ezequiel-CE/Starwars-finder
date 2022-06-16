import { handleError, throwSpecificError } from "./error";

export const getAllFilms = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/films`);
    if (!response.ok) {
      return handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throwSpecificError(error);
  }
};

export const getFilmById = async (id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    if (!response.ok) {
      return handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throwSpecificError(error);
  }
};
