import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Program from "./pages/Program";

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
