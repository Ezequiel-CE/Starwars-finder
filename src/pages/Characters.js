import { useState, useEffect } from "react";
import { Title } from "../components/characters/characters.style";
import { getCharacters } from "../api/characters";
import CharacterGallery from "../components/characters/CharacterGallery";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { padding } from "@mui/system";

const Characters = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page)
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Title> Find your Characters</Title>
      {data && (
        <>
          <CharacterGallery characters={data.results} />
          <Stack spacing={2} sx={{ alignItems: "center", marginTop: "50px" }}>
            <Pagination count={9} onChange={handleChange} />
          </Stack>
        </>
      )}
    </div>
  );
};

export default Characters;
