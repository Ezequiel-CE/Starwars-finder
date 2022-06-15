import NavBar from "./navbar";
import Container from "@mui/material/Container";
import Stars from "./Stars";

const Layout = ({ children }) => {
  return (
    <>
      <Stars />

      <NavBar />
      <Container sx={{ marginTop: "40px" }}>{children}</Container>
    </>
  );
};

export default Layout;
