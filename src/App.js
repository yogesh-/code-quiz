import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { Option } from "./pages/options/option.jsx";
import { useTheme } from "./context/theme/themecontext";
import { CssQuiz } from "./pages/quiz/css-quiz";
import { HtmlQuiz } from "./pages/quiz/html-quiz";
import { JsQuiz } from "./pages/quiz/js-quiz";

function App() {
  const { dark } = useTheme();
  return (
    <div className={`${dark}`}>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/option" element={<Option />} />
          <Route path="/css-quiz" element={<CssQuiz />} />
          <Route path="/html-quiz" element={<HtmlQuiz />} />
          <Route path="/js-quiz" element={<JsQuiz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
