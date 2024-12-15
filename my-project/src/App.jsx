import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing React Router
// Importing Components
import Main_Page from "./components/Main_Page";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";
import Industry from "./components/Industry";
import Ceo from "./components/Ceo";
import Testonomials from "./components/Testonomials";

// Importing Pages
import About_us from "./Pages/About/About_us";
import Contact_Us from "./Pages/Contact/Contact_Us";
import All_Courses from "./Pages/MainPage/All_Courses";
import MyAccount from "./Pages/My_Account/Account";

// Importing Styles
import "./App.css";

// Main layout for the page
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Main_Page />} />{" "}
          {/* Main Page (with Navbar) only on Home */}
          <Route path="/about-us" element={<About_us />} />
          <Route path="/contact-us" element={<Contact_Us />} />
          <Route path="/all-courses" element={<All_Courses />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>

        {/* Static components that should always be visible */}
        <Card />
        <Card2 />
        <Ceo />
        <br />
        <Industry />
        <Testonomials />

        {/* Footer always visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
