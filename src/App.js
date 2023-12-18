import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import smooth from "./utils/smooth";
import link from "./utils/link";
import HomeView from "./views/HomeView";
import ApiTest from "./ApiTest";

const App = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Api_test" element={<ApiTest />} />
      </Routes>
    </div>
  );
};

export default App;
