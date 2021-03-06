import Layout from "./components/ui/layout ";
import { Routes, Route } from "react-router-dom";
import Name from "./pages/Name";
import Characters from "./pages/Characters";
import Search from "./pages/Seach";
import CharacterPage from "./pages/CharacterPage";
import Films from "./pages/Films";
import FilmPage from "./pages/FilmPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterPage />} />
        <Route path="films" element={<Films />} />
        <Route path="films/:id" element={<FilmPage />} />
        <Route path="search" element={<Search />} />
        <Route path="/" element={<Name />} />
      </Routes>
    </Layout>
  );
}

export default App;
