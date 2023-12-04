import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/main";
import { NotFoundPage } from "./pages/404Page";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
