import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Template from "./Components/Template/Template";

const App = () => {
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
          <Route path="/healthcares-revolution" element={<HealthRevoations />} />
          <Route path="/cosmic-energy" element={<CosmicEnergy />} />
          <Route path="/aerospace" element={<Aerospace />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
