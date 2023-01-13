import React from "react";
import PersonalDetails from "./PersonalDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import EducationalDetails from "./EducationalDetails";
import ExperienceDetails from "./ExperienceDetails";
import SkillSets from "./SkillSets";
import ProjectDetails from "./ProjectDetails";
import CertificationDetails from "./CertificationDetails";
import AwardDetails from "./AwardDetails";

let currentInstitute = 0;
let noExperience = 0;
let noProjects = 0;
let noCertificates = 0;
let noAwards = 0;

const CvForm = (props) => {
  const { title, details, setDetails } = props;

  if (title === "Personal Details") {
    return (
      <PersonalDetails
        title={title}
        personalDetails={details.personalDetails}
        setPersonalDetails={setDetails}
      />
    );
  } else if (title === "Education") {
    return (
      <div className="container my-2">
        <p className="fs-6 text-uppercase text-success">
          COLLEGE / ACADEMIC DEGREE
        </p>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-outline-secondary d-flex align items-center px-2 py-2"
            onClick={() => {
              currentInstitute += 1;
              setDetails((prev) => {
                return {
                  ...prev,
                  educationDetails: [
                    ...prev.educationDetails,
                    {
                      id: currentInstitute,
                      universityName: "",
                      timePeriod: {
                        startDate: new Date(),
                        endDate: new Date(),
                      },
                      program: "",
                      location: "",
                      gpa: 0,
                      degreeType: "",
                    },
                  ],
                };
              });
            }}
          >
            <span className="d-block mx-2">
              <FontAwesomeIcon icon={faAdd} />
            </span>
            Add Education
          </button>
          {/* Now Displaying Form Here */}
          {details.educationDetails.map((item, index) => (
            <EducationalDetails
              index={item.id}
              key={index}
              educationalDetails={item}
              setEducationDetails={setDetails}
            />
          ))}
        </div>
      </div>
    );
  } else if (title === "Experience") {
    return (
      <div className="container my-2">
        <p className="fs-6 text-uppercase text-success">JOBS / INTERNSHIPS</p>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-outline-secondary d-flex align items-center px-2 py-2"
            onClick={() => {
              noExperience += 1;
              setDetails((prev) => {
                return {
                  ...prev,
                  experienceDetails: [
                    ...prev.experienceDetails,
                    {
                      id: noExperience,
                      organization: "",
                      jobTitle: "",
                      location: "",
                      startDate: new Date(),
                      endDate: new Date(),
                      details: "",
                    },
                  ],
                };
              });
            }}
          >
            <span className="d-block mx-2">
              <FontAwesomeIcon icon={faAdd} />
            </span>
            Add Experience
          </button>
          {/* Now Displaying Form Here */}
          {details.experienceDetails.map((item, index) => (
            <ExperienceDetails
              index={item.id}
              key={index}
              experienceDetails={item}
              setExperienceDetails={setDetails}
            />
          ))}
        </div>
      </div>
    );
  } else if (title === "Skillsets") {
    return (
      <div className="container my-2">
        <SkillSets
          skillsDetails={details.skillsDetails}
          setSkillsDetails={setDetails}
        />
      </div>
    );
  } else if (title === "Projects") {
    return (
      <div className="container my-2">
        <p className="fs-6 text-uppercase text-success">
          OPEN SOURCE / PERSONAL PROJECTS
        </p>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-outline-secondary d-flex align items-center px-2 py-2"
            onClick={() => {
              noProjects += 1;
              setDetails((prev) => {
                return {
                  ...prev,
                  projectsDetails: [
                    ...prev.projectsDetails,
                    {
                      id: noProjects,
                      title: "",
                      link: "",
                      technologies: [],
                      details: [],
                    },
                  ],
                };
              });
            }}
          >
            <span className="d-block mx-2">
              <FontAwesomeIcon icon={faAdd} />
            </span>
            Add Contribuition / Project
          </button>
          {/* Now Displaying Form Here */}
          {details.projectsDetails.map((item, index) => (
            <ProjectDetails
              index={item.id}
              key={index}
              projectsDetails={item}
              setProjectsDetails={setDetails}
            />
          ))}
        </div>
      </div>
    );
  } else if (title === "Certifications") {
    return (
      <div className="container my-2">
        <p className="fs-6 text-uppercase text-success">Certifications</p>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-outline-secondary d-flex align items-center px-2 py-2"
            onClick={() => {
              noCertificates += 1;
              setDetails((prev) => {
                return {
                  ...prev,
                  certificationDetails: [
                    ...prev.certificationDetails,
                    {
                      id: noCertificates,
                      title: "",
                      link: "",
                      issuedBy: "",
                    },
                  ],
                };
              });
            }}
          >
            <span className="d-block mx-2">
              <FontAwesomeIcon icon={faAdd} />
            </span>
            Add Certificate
          </button>
          {/* Now Displaying Form Here */}
          {details.certificationDetails.map((item, index) => (
            <CertificationDetails
              index={item.id}
              key={index}
              certificationDetails={item}
              setCertificationDetails={setDetails}
            />
          ))}
        </div>
      </div>
    );
  } else if (title === "Additional") {
    return (
      <div className="container my-2">
        <p className="fs-6 text-uppercase text-success">HONORS & AWARDS</p>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-outline-secondary d-flex align items-center px-2 py-2"
            onClick={() => {
              noAwards += 1;
              setDetails((prev) => {
                return {
                  ...prev,
                  awardDetails: [
                    ...prev.awardDetails,
                    {
                      id: noAwards,
                      title: "",
                    },
                  ],
                };
              });
            }}
          >
            <span className="d-block mx-2">
              <FontAwesomeIcon icon={faAdd} />
            </span>
            Add Honor / Award
          </button>
          {/* Now Displaying Form Here */}
          {details.awardDetails.map((item, index) => (
            <AwardDetails
              index={item.id}
              key={index}
              awardDetails={item}
              setAwardDetails={setDetails}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default CvForm;
