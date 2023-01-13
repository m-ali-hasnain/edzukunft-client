import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Collapse, Button } from "react-bootstrap";
const ExperienceDetails = ({
  index,
  experienceDetails,
  setExperienceDetails,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleChange = (field, value) => {
    setExperienceDetails((prev) => {
      return {
        ...prev,
        experienceDetails: prev.experienceDetails.map((item) =>
          item.id === index ? { ...item, [field]: value } : { ...item }
        ),
      };
    });
  };

  const handleRemove = () => {
    setExperienceDetails((prev) => {
      return {
        ...prev,
        experienceDetails: prev.experienceDetails.filter(
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
            Company Details
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
                <label htmlFor="employer">Employer</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="HackerRank"
                  aria-label="Employer"
                  name="organization"
                  value={experienceDetails.organization}
                  onChange={(e) => {
                    handleChange("organization", e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Senior Software Developer"
                  aria-label="Job Title"
                  name="jobTitle"
                  value={experienceDetails.jobTitle}
                  onChange={(e) => {
                    handleChange("jobTitle", e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  aria-label="Start Date"
                  name="startDate"
                  // value={experienceDetails.startDate}
                  required
                  onChange={(e) => {
                    handleChange("startDate", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  aria-label="End Date"
                  name="endDate"
                  // value={experienceDetails.endDate}
                  required
                  onChange={(e) => {
                    handleChange("endDate", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Location"
                  name="location"
                  required
                  value={experienceDetails.location}
                  onChange={(e) => {
                    handleChange("location", e.target.value);
                  }}
                />
              </div>
              <div className="col"></div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Description"
                  name="details"
                  required
                  value={experienceDetails.details}
                  onChange={(e) => {
                    handleChange("details", e.target.value);
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

export default ExperienceDetails;
