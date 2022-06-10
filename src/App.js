import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { Option } from "./pages/options/option.jsx";
import { useTheme } from "./context/theme/themecontext";
import { CssQuiz } from "./pages/quiz/css-quiz";
import { HtmlQuiz } from "./pages/quiz/html-quiz";
import { JsQuiz } from "./pages/quiz/js-quiz";
import { HtmlResult } from "./pages/result/htmlResult.jsx";
import { CssResult } from "./pages/result/cssResult.jsx";
import { JsResult } from "./pages/result/jsResult.jsx";

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
          <Route path="/html-result" element={<HtmlResult />} />
          <Route path="/css-result" element={<CssResult />} />
          <Route path="/js-result" element={<JsResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
