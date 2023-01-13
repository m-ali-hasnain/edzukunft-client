import React from "react";
import moment from "moment";
const ResumeDetails = React.forwardRef((props, ref) => {
  const { details } = props;
  const {
    personalDetails,
    educationDetails,
    experienceDetails,
    skillsDetails,
    projectsDetails,
    certificationDetails,
    awardDetails,
  } = details;
  return (
    <div
      className="card p-4 overflow-scroll custom-card"
      style={{ height: "100vh", width: "100%" }}
      ref={ref}
    >
      {" "}
      {/* Personal Details */}
      <div className="container d-flex flex-column align-items-center">
        <p className="fs-2 fw-light text-uppercase">
          {personalDetails.firstName === "" && personalDetails.lastName === ""
            ? "Your Name"
            : `${personalDetails.firstName} ${personalDetails.lastName}`}

          <span className="d-block fs-6 fw-light text-center">
            {personalDetails.title}
          </span>
        </p>
        <div className="text-secondary">
          <span>{personalDetails.email}</span>{" "}
          {personalDetails.email !== "" && "|"}{" "}
          <span>{personalDetails.phoneNo}</span>{" "}
          {personalDetails.phoneNo !== "" && "|"}{" "}
          <span>{personalDetails.address}</span>
        </div>
        {/* Social Links */}
        <div>
          {personalDetails.socialLinks.map((item, index) => {
            return (
              <span key={index}>
                <a className="text-decoration-none text-dark" href={item.value}>
                  {item.linkType}
                  {item.linkType !== "" &&
                  index !== personalDetails.socialLinks.length - 1
                    ? " | "
                    : ""}
                </a>
              </span>
            );
          })}
        </div>
      </div>
      <hr />
      {/*  Education Details */}
      {educationDetails.length !== 0 && (
        <div className="d-flex flex-column">
          <h4 className="text-secondary text-uppercase">Education</h4>
          {educationDetails.map((item, index) => {
            return (
              <div className="d-flex flex-column mb-2" key={index}>
                <div className="d-flex justify-content-between">
                  <p className="fs-5 ">{item.universityName}</p>
                  {item.universityName !== "" && (
                    <p>
                      {moment(item.startDate).format("MMMM YYYY") +
                        " - " +
                        moment(item.endDate).format("MMMM YYYY")}
                    </p>
                  )}
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fs-6">
                    <span>{item.degreeType} </span>
                    {item.program}
                  </p>
                  <p>{item.location}</p>
                </div>
                <div>
                  {item.gpa !== 0 && (
                    <p className="text-secondary">GPA: {item.gpa}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Experience Details */}
      {experienceDetails.length !== 0 && (
        <div className="d-flex flex-column">
          <h4 className="text-secondary text-uppercase">Experience</h4>
          {experienceDetails.map((item, index) => {
            return (
              <div className="d-flex flex-column mb-2" key={index}>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <p className="fs-5">
                      <span>{item.organization} </span>{" "}
                      {item.organization !== "" && " | "}
                      <span>{item.jobTitle}</span>
                    </p>
                    {item.organization !== "" && (
                      <p className="">
                        <span>
                          {" "}
                          {item.location !== "" && `${item.location} | `}
                        </span>
                        <span>
                          {moment(item.startDate).format("MMMM YYYY") +
                            " - " +
                            moment(item.endDate).format("MMMM YYYY")}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="lh-1 text-secondary">
                    <ul>
                      {item.details.length !== 0 &&
                        item.details.split(".").map((sentence, index) => {
                          return <li key={index}>{sentence}</li>;
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Skills Details */}
      {skillsDetails.some((item) => item.value.length !== 0) && (
        <div className="d-flex flex-column">
          <h4 className="text-secondary text-uppercase">Skills</h4>
          {skillsDetails.map((item, index) => {
            return (
              <div
                className="d-flex w-sm-50 w-100 justify-content-between"
                key={index}
              >
                <p>{item.title}</p>
                <p>{item.value.join(", ")}</p>
              </div>
            );
          })}
        </div>
      )}
      {/* Projects */}
      {projectsDetails.length !== 0 && (
        <div className="d-flex flex-column">
          <h4 className="text-secondary text-uppercase">
            Projects / OPEN-SOURCE
          </h4>
          {projectsDetails.map((item, index) => {
            return (
              <div className="d-flex flex-column m-0 p-0" key={index}>
                <div className="d-flex justify-content-between">
                  <p className="fs-6">
                    <span className="text-uppercase">{item.title} </span>{" "}
                    {item.title !== "" && " | "}
                    {item.link !== "" && (
                      <span className="text-secondary">
                        <a
                          className="text-decoration-none text-dark"
                          href={item.link}
                        >
                          Link
                        </a>
                      </span>
                    )}
                  </p>
                  <p>{item.technologies.join(" ")}</p>
                </div>
                <p className="text-secondary">{item.details}</p>
              </div>
            );
          })}
        </div>
      )}
      {/* Certification Details */}
      {certificationDetails.length !== 0 && (
        <div className="d-flex flex-column">
          <p className="fs-5 text-uppercase text-secondary">Certification</p>
          <div className="d-flex flex-column">
            <ul>
              {certificationDetails.map((item) => (
                <>
                  {item.title !== "" && (
                    <li>
                      <a href={item.link || ""} className="text-secondary">
                        {item.title} {item.issuedBy !== "" && " - "}
                      </a>
                      <span className="fw-normal text-uppercase">
                        {item.issuedBy}
                      </span>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* Award Details */}
      {awardDetails.length !== 0 && (
        <div className="d-flex flex-column">
          <p className="fs-5 text-uppercase text-secondary">Honors & Awards</p>
          <div className="d-flex flex-column">
            <ul>
              {awardDetails.map((item) => (
                <>
                  {item.title !== "" && (
                    <li className="text-secondary">{item.title}</li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
});
export default ResumeDetails;
