import NotFound from "../../assets/notFound.png";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { NotFoundImg } from "./name.styled";

const NoFound = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "100px" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Looks like the force is not here </h2>
        <p>
          Try to{" "}
          {
            <Link to="/name" style={{ textDecoration: "none" }}>
              search
            </Link>
          }{" "}
          a diferent character.
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <NotFoundImg src={NotFound} alt="yoda not found " />
      </Grid>
    </Grid>
  );
};

export default NoFound;
