import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid page-margin-top home-gradient text-center"
        style={{ height: "450px" }}
      >
        <h1 className="pt-5">Skills speak louder than words</h1>
        <p>
          We help companies develop the strongest teams around. We help
          technicians sharpen their skills and pursue job opportunities.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
