import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/main";
import { NotFoundPage } from "./pages/404Page";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { ProfilePage } from "./pages/profile";
import { AdPage } from "./pages/adPage";
import { SellersProfilePage } from "./pages/SallersProfile";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/reg" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/adpage/:itemId" element={<AdPage />} />
        <Route
          path="/profileSellers/:itemUser"
          element={<SellersProfilePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
