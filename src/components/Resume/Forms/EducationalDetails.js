import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Collapse, Button } from "react-bootstrap";
const EducationalDetails = ({
  index,
  educationalDetails,
  setEducationDetails,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleChange = (field, value) => {
    setEducationDetails((prev) => {
      return {
        ...prev,
        educationDetails: prev.educationDetails.map((item) =>
          item.id === index ? { ...item, [field]: value } : { ...item }
        ),
      };
    });
  };

  const handleRemove = () => {
    setEducationDetails((prev) => {
      return {
        ...prev,
        educationDetails: prev.educationDetails.filter(
          (item) => item.id !== index
        ),
      };
    });
  };
  return (
    <>
      <div className="container my-2">
        {/* Button Here */}
        <div className="d-flex my-2">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="outline-secondary"
            className="w-100 mx-2"
          >
            Institute Details
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleRemove(index);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>

        <Collapse in={open}>
          <div id="example-collapse-text">
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="universityName">Institue Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="XYZ University"
                  aria-label="Institue Name"
                  name="universityName"
                  value={educationalDetails.universityName}
                  onChange={(e) => {
                    handleChange("universityName", e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rawalpindi, Pakistan"
                  aria-label="location"
                  name="location"
                  value={educationalDetails.location}
                  onChange={(e) => {
                    handleChange("location", e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="degreeType">Degree Type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bachelors/Master"
                  aria-label="Degree Type"
                  name="degreeType"
                  value={educationalDetails.degreeType}
                  onChange={(e) => {
                    handleChange("degreeType", e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="program">Program</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Computer Science"
                  aria-label="Program"
                  name="program"
                  value={educationalDetails.program}
                  required
                  onChange={(e) => {
                    handleChange("program", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="startDate">Start Month/Year</label>
                <input
                  type="date"
                  className="form-control"
                  aria-label="Start Date"
                  name="startDate"
                  required
                  // value={educationalDetails.timePeriod.startDate}
                  onChange={(e) => {
                    handleChange("startDate", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="title">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  aria-label="End Date"
                  name="endDate"
                  required
                  // value={educationalDetails.timePeriod.endDate}
                  onChange={(e) => {
                    handleChange("endDate", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="gpa">Gpa</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="gpa"
                  name="gpa"
                  required
                  value={educationalDetails.gpa}
                  onChange={(e) => {
                    handleChange("gpa", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default EducationalDetails;
