import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./Components/HomePage/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurProject from "./Components/OurProject/OurProject";
import TownshipPerspective from "./Components/TownshipPerspective/TownshipPerspective";
import Proposed from "./Components/Proposed/Proposed";
import DataCenter from "./Components/DataCenter/DataCenter";
import ManagementTeam from "./Components/ManagementTeam/ManagementTeam";
import OfficeTeam from "./Components/OfficeTeam/OfficeTeam";
import Futureishere from "./Components/Futureishere/Futureishere";
import PoweringCities from "./Components/PoweringCities/PoweringCities";
import HealthRevoations from "./Components/HealthRevoations/HealthRevoations";
import CosmicEnergy from "./Components/CosmicEnergy/CosmicEnergy";
import Aerospace from "./Components/Aerospace/Aerospace";
import Agriculture from "./Components/Agriculture/Agriculture";
import Construction from "./Components/Construction/Construction";
import Interaction from "./Components/Intercation/Interaction";
import WhispersOfThePast from "./Components/WhispersOfThePast/WhispersOfThePast";
import NewsRoom from "./Components/NewsRoom/NewsRoom";
import NewsUploadForm from "./Components/NewsUploadForm/NewsUploadForm";
import LoginPage from "./Components/LoginPage/LoginPage";

export const server = "https://vpvvindiabackend-com.onrender.com/api/v1";

const App = () => {
  // ✅ Inline ProtectedRoute component
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // or use sessionStorage if you prefer

    if (!token) {
      // If no token, redirect to login
      return <Navigate to="/login" replace />;
    }

    // If logged in, show the protected component
    return children;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-project" element={<OurProject />} />
          <Route
            path="/township-perspective"
            element={<TownshipPerspective />}
          />
          <Route path="/proposed" element={<Proposed />} />
          <Route path="/data-center" element={<DataCenter />} />
          <Route path="/management-team" element={<ManagementTeam />} />
          <Route path="/office-team" element={<OfficeTeam />} />
          <Route path="/futureishere" element={<Futureishere />} />
          <Route path="/power-cities" element={<PoweringCities />} />
          <Route
            path="/healthcares-revolution"
            element={<HealthRevoations />}
          />
          <Route path="/cosmic-energy" element={<CosmicEnergy />} />
          <Route path="/aerospace" element={<Aerospace />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route path="/whispers-of-the-past" element={<WhispersOfThePast />} />
          <Route path="/newsroom" element={<NewsRoom />} />

          {/* ✅ Protected route for upload-news */}
          <Route
            path="/upload-news"
            element={
              <ProtectedRoute>
                <NewsUploadForm />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

      {/* ✅ Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default App;
