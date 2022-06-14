import Grid from "@mui/material/Grid";

const filmURL = "https://starwars-visualguide.com/assets/img/films/";

const FilmInfo = ({ movie }) => {
  const {
    episode_id: id,
    title,
    director,
    producer,
    release_date,
    opening_crawl,
  } = movie;

  return (
    <Grid container spacing={3} sx={{ marginTop: "50px" }}>
      <Grid item xs={12} md={6}>
        <img src={`${filmURL}${id}.jpg`} alt={title}></img>
      </Grid>
      <Grid item xs={12} md={6}>
        <h2>{title}</h2>
        <p>Release date: {release_date}</p>
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <p>Opening Crawl:</p>
        <p>{opening_crawl}</p>
      </Grid>
    </Grid>
  );
};

export default FilmInfo;
