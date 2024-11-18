import { Route, Routes } from "react-router-dom";
import PokeApi from "./pages/Pokemon";
import Home from "./pages/Home";
import Framer from "./pages/Framer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokiApi" element={<PokeApi />} />
        <Route path="/framer" element={<Framer />} />
      </Routes>
    </>
  );
}

export default App;
