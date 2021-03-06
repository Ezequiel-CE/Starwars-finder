import NotFound from "../../assets/notFound.png";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { NotFoundImg } from "./name.styled";
import { css } from "@emotion/css";

const NoFound = () => {
  return (
    <Grid container sx={{ marginTop: "100px" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h2
          className={css`
            font-size: 40px;
            @media (max-width: 600px) {
              font-size: 25px;
            }
          `}
        >
          Look like the force is not here{" "}
        </h2>
        <p
          className={css`
            font-size: 20px;
          `}
        >
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
