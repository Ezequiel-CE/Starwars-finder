export const getAllFilms = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/films`);
    if (!response.ok) {
      throw new Error("no se pudo obtener info de las pelis");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilmById = async (id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    if (!response.ok) {
      throw new Error("no se pudo obtener info de la peli");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
