import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
