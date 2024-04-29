import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./komponenter/Navigation";
import Startsida from "./pages/Startsida";
import Information from "./pages/Information";
import Todos from "./pages/Todos";

const App = () => (
  <BrowserRouter>
    <header>
      <Navigation />
    </header>
    <Routes>
      <Route path="/" element={<Startsida />} />
      <Route path="/information" element={<Information />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
