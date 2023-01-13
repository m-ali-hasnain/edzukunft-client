import React from "react";
import Header from "../Resume/Header";
import ButtonsPanel from "../Resume/ButtonsPanel";
import ResumeDetails from "../Resume/ResumeDetails";
import Navbar from "../../components/Navbar/BlackNav";
import "./index.css";
import { useSelector } from "react-redux";

const Resume = () => {
  const resumeDetails = useSelector((state) => state.resume.details);
  const [details, setDetails] = React.useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      address: "",
      socialLinks: [],
      title: "",
    },
    educationDetails: [],
    experienceDetails: [],
    skillsDetails: [
      {
        id: 1,
        title: "Programming Languages",
        placeHolder: ["C++", "Python", "Java", "C#"],
        value: [],
      },
      {
        id: 2,
        title: "Libraries / Frameworks",
        placeHolder: ["React JS", "Ruby On Rails", "Express JS"],
        value: [],
      },
      {
        id: 3,
        title: "Tools / Platforms",
        placeHolder: ["VS Code", "GitHub", "Docker"],
        value: [],
      },
      {
        id: 4,
        title: "Databases",
        placeHolder: ["Mongo", "SQL", "PostgreSQL"],
        value: [],
      },
    ],
    projectsDetails: [],
    certificationDetails: [],
    awardDetails: [],
  });

  React.useEffect(() => {
    console.log("ResumeDetails: ", resumeDetails);
    setDetails({ ...resumeDetails });
  }, []);
  const cvRef = React.useRef(null);

  return (
    <>
      <Navbar />
      <div className="container my-4 d-flex flex-column">
        <Header title="Muhammad Hasnain Ali's" ref={cvRef} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              {/* Buttons Panel */}
              <ButtonsPanel details={details} setDetails={setDetails} />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <ResumeDetails details={details} ref={cvRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
