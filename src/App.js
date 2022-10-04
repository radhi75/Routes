import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import tours from "./Assets/Data";
import Home from "./Components/Home";
import Navaigation from "./Components/Navaigation";
import Pricing from "./Components/Pricing";
import Tours from "./Components/Tours";
function App() {
  const [tour, setTour] = useState(tours);
  return (
    <div className="App">
      <Navaigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours tour={tour} />} />
        <Route path="/tour/:id" element={<Pricing tour={tour} />} />
      </Routes>
    </div>
  );
}

export default App;
