import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spiner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "650px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
};

export default Spiner;
