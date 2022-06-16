import { handleError, throwSpecificError } from "./error";

export const getCharacters = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      return handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throwSpecificError(error);
  }
};

export const getCharactersByName = async (name, page) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${name}&page=${page}`
    );
    if (!response.ok) {
      return handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throwSpecificError(error);
  }
};

export const getCharactersByid = async (id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!response.ok) {
      return handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throwSpecificError(error);
  }
};
