import "./App.css";
import Layout from "./components/ui/layout ";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Characters from "./pages/Characters";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="characters" element={<Characters />} />
      </Routes>
    </Layout>
  );
}

export default App;
