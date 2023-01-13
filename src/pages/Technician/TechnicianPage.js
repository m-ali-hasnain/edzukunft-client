import React from "react";

import TechnicianForm from "../../components/Forms/TechnicianForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function TechnicianPage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid page-margin-top text-center">
        <h1>ed.zukunft Hail Karosserie</h1>
        <p>
          Join over 21 million technicians, having practical skills, find for
          work, and get hired.
        </p>
      </div>
      <TechnicianForm />
      <p className="text-muted text-center">
        By signing up you agree to our Terms of Service and Privacy Policy
      </p>
      <Footer />
    </>
  );
}

export default TechnicianPage;
