import Grid from "@mui/material/Grid";
import FilmCard from "./FilmCard";

const FilmsGallery = ({ movies }) => {
  return (
    <Grid container spacing={3} sx={{ marginBottom: "50px" }}>
      {movies.map((movie, i) => (
        <Grid key={i} item xs={6} md={4}>
          <FilmCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FilmsGallery;
