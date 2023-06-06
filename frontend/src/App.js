import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Herosection,
  Category,
  Milestone,
  Exploreprojects,
  Footer,
  Loginsign,
  Projects,
  Dashboard,
} from "./components";
import Voting from "./components/Voting";
import Cordion from "./components/Cordion";
import ShowCampaign from "./components/ShowCampaign";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />

                <Herosection />
                <Category />
                <Milestone />
                <Cordion />
                <br />
                <br />

                <Exploreprojects />
                <br />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Navbar />

                <Herosection />
                <Loginsign />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/voting"
            element={
              <>
                <Voting />
              </>
            }
          />

          <Route
            path="/Create-Campaign"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/projects"
            element={
              <>
                <Navbar />

                <Herosection />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/showCampaign" element={<ShowCampaign />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
