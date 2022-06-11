import Grid from "@mui/material/Grid";
import CharacterCard from "./CharacterCard";

const CharacterGallery = ({ characters }) => {
  console.log(characters);
  return (
    <Grid container spacing={3}>
      {characters.map((data, i) => (
        <Grid key={i} item xs={12} sm={6} md={2.4}>
          <CharacterCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterGallery;
