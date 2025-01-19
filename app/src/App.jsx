import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => {
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem("profiles");
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = [newProfile, ...prevProfiles]; 
      localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
      return updatedProfiles;
    });
  };

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  console.log(profiles);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home profiles={profiles} />} />
          <Route
            path="/admin"
            element={<Admin addProfile={addProfile} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
