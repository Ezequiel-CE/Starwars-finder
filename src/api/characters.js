export const getCharacters = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new Error("no se pudo obtener info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCharactersByName = async (name, page) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${name}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("no se pudo obtener info del personaje");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
