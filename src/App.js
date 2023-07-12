import "./App.css";

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";
import { Signin } from "./Signin";
import { SignupPage } from "./SignupPage";
import { Welcome } from "./Welcome";
export const locateContext = createContext();
function App() {
  const [Data, setData] = useState("No User");

  return (
    <div className="App">
      <BrowserRouter>
        <locateContext.Provider
          value={{
            setData: setData,
            Data,
          }}
        >
          <Routes>
            <Route path="/Signin" element={<Signin />} />
            <Route path="/" element={<SignupPage />} />
            <Route path="/Welcome" element={<Welcome />} />
          </Routes>
        </locateContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
