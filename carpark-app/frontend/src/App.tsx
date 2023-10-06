import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./assets/components/Login";
import CreateAccount from "./assets/components/CreateAccount";
import NavigationBar from "./assets/components/NavigationBar";
import Home from "./assets/components/Home";
import Help from "./assets/components/Help";
import About from "./assets/components/About";
import SearchCarPark from "./assets/components/SearchCarPark";
import Admin from "./assets/components/Admin";
import ResetPassword from "./assets/components/ResetPassword";
import ForgetPasswordLogin from "./assets/components/ForgetPasswordLogin";
function App() {
  const homeLinks = [
    { to: "/Login", label: "Login" },
    { to: "/About", label: "About" },
  ];

  const otherLinks = [
    // Define navigation for other routes here
    { to: "/Login", label: "Logout" },
  ];

  const resetLink = [{ to: "/", label: "Home" }];

  return (
    <>
      <Routes>
        {/* Homepage nav bar*/}
        <Route
          path="/"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={homeLinks} />
              <Home />
            </>
          }
        />
        <Route
          path="/Help"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={homeLinks} />
              <Help />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={homeLinks} />
              <Login />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={homeLinks} />
              <About />
            </>
          }
        />
        <Route
          path="/CreateAccount"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={homeLinks} />
              <CreateAccount />
            </>
          }
        />
        <Route
          path="/ForgetPasswordLogin"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={homeLinks} />
              <ForgetPasswordLogin />
            </>
          }
        />

        {/* other nav bar */}
        <Route
          path="/SearchCarpark"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={otherLinks} />
              <SearchCarPark />
            </>
          }
        />

        <Route
          path="/Admin"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={otherLinks} />
              <Admin />
            </>
          }
        />

        <Route
          path="/ResetPassword"
          element={
            <>
              <NavigationBar logo="SwiftPark" links={resetLink} />
              <ResetPassword />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
