import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegation from "./Components/Navbar";

import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import NotFound from "./Pages/NotFound";



function App() {
  return (
      <Router>
        <Navegation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
