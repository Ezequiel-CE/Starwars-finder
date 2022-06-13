import "./App.css";
import Layout from "./components/ui/layout ";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Characters from "./pages/Characters";
import Search from "./pages/Seach";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="name" element={<Name />} />
        <Route path="characters" element={<Characters />} />
        <Route path="search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
