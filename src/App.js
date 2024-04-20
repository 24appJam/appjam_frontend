import React, { useState, useEffect } from "react";
import Playlist from "./pages/Playlist/playlist";
import Main from "./pages/main";
import Create from "./pages/Create/create";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loading ? <Main /> : <Navigate to="/playlist" />}
          ></Route>
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
    overflow-x: hidden
  }
`;

export default App;
