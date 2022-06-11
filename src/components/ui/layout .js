import NavBar from "./navbar";
import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: "40px" }}>{children}</Container>
    </>
  );
};

export default Layout;
