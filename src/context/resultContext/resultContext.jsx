import React, { useContext, createContext, useReducer } from "react";
import { ResultReducer } from "../../reducer/resultReducer";

const ResultContext = createContext();

const ResultProvider = ({ children }) => {
  const [resultState, resultDispatch] = useReducer(ResultReducer, {
    userQuest: "",
    userAns: "",
    ansFlag: "",
    userData: [],

    // // new data
    // allOptions: [],
    // correctOption: [],
  });

  return (
    <ResultContext.Provider value={{ resultState, resultDispatch }}>
      {children}
    </ResultContext.Provider>
  );
};

const useResult = () => useContext(ResultContext);

export { useResult, ResultProvider };
