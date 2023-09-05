import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Survey from "./components/Survey";
import Response from "./components/Response";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Survey />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </div>
  );
}

export default App;
