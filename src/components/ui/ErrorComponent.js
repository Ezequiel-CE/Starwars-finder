import errorImg from "../../assets/error.png";
import Grid from "@mui/material/Grid";
import { css } from "@emotion/css";

const ErrorComponent = ({ errorMsg }) => {
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
          {errorMsg}
        </h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          className={css`
            width: 100%;
          `}
          src={errorImg}
          alt="yoda not found "
        />
      </Grid>
    </Grid>
  );
};

export default ErrorComponent;
