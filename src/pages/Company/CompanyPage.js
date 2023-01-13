import React from "react";

import CompanyForm from "../../components/Forms/CompanyForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function CompanyPage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid page-margin-top text-center">
        <h1>ed.zukunft Hail Karosserie</h1>
        <p>
          We are the market-leading technical interview platform to identify and
          hire technicians with the right skills.
        </p>
      </div>
      <CompanyForm />
      <p className="text-muted text-center">
        By signing up you agree to our Terms of Service and Privacy Policy
      </p>
      <Footer />
    </>
  );
}

export default CompanyPage;
