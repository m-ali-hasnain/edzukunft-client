import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginForm";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import SignUpPage from "./pages/SignUpPage";
import TechnicianPage from "./pages/Technician/TechnicianPage";
import CompanyPage from "./pages/Company/CompanyPage";
import EditTechnician from "./pages/Technician/EditTechnician";
import EditCompany from "./pages/Company/EditCompany";
import ForgetPasswordCompany from "./pages/Company/ForgetPassword";
import ForgetPasswordTechnician from "./pages/Technician/ForgetPassword";
import ChangePasswordCompany from "./pages/Company/ChangePassword";
import ChangePasswordTechnician from "./pages/Technician/ChangePassword";
import Verified from "./pages/Verified";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signIn" element={<Login />} />
          <Route exact path="/:id/:token" element={<Verified />} />
          <Route exact path="/signUp" element={<SignUpPage />} />
          <Route exact path="/signUp/company" element={<CompanyPage />} />
          <Route exact path="/signUp/technician" element={<TechnicianPage />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/technician/edit" element={<EditTechnician />} />
          <Route exact path="/company/edit" element={<EditCompany />} />
          <Route
            exact
            path="/company/forgetPassword"
            element={<ForgetPasswordCompany />}
          />{" "}
          <Route
            exact
            path="/company/changePassword/:companyID/:token"
            element={<ChangePasswordCompany />}
          />
          <Route
            exact
            path="/technician/forgetPassword"
            element={<ForgetPasswordTechnician />}
          />
          <Route
            exact
            path="/technician/changePassword/:technicianID/:token"
            element={<ChangePasswordTechnician />}
          />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
