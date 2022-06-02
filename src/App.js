import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { Option } from "./pages/options/option.jsx";
import { useTheme } from "./context/theme/themecontext";

function App() {
  const { dark } = useTheme();
  return (
    <div className={`${dark}`}>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/option" element={<Option />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
