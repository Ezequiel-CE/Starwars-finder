import Grid from "@mui/material/Grid";
import CharacterCard from "./CharacterCard";

const CharacterGallery = ({ characters }) => {
  return (
    <Grid container spacing={3}>
      {characters.map((data, i) => (
        <Grid key={i} item xs={6} sm={4} md={2.4}>
          <CharacterCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterGallery;
