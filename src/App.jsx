import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Cascada } from "./components/Cascada";
import { Desierto } from "./components/Desierto";
import { Desierto2 } from "./components/Desierto2";
import { Faro } from "./components/Faro";
import { Arcoiris } from "./components/arcoiris";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="text-center my-3">Gallery Project</h1>
        <div className="container d-flex justify-content-center">
          <Routes>
            <Route
              path="/arcoiris"
              element={<Arcoiris className="main-img-container" />}
            />
            <Route
              path="/cascada"
              element={<Cascada className="main-img-container" />}
            />
            <Route
              path="/desierto"
              element={<Desierto className="main-img-container" />}
            />
            <Route
              path="/desierto2"
              element={<Desierto2 className="main-img-container" />}
            />
            <Route
              path="/faro"
              element={<Faro className="main-img-container" />}
            />
          </Routes>
        </div>
        <div>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
