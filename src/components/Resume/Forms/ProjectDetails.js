import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Collapse, Button } from "react-bootstrap";
import Chips from "react-chips";
const ProjectDetails = ({ index, projectsDetails, setProjectsDetails }) => {
  const [open, setOpen] = React.useState(false);
  const handleChange = (field, value) => {
    setProjectsDetails((prev) => {
      return {
        ...prev,
        projectsDetails: prev.projectsDetails.map((item) =>
          item.id === index ? { ...item, [field]: value } : { ...item }
        ),
      };
    });
  };

  const handleRemove = () => {
    setProjectsDetails((prev) => {
      return {
        ...prev,
        projectsDetails: prev.projectsDetails.filter(
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
            Project Details
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
                <label htmlFor="projectTitle">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Linux Kernel etc"
                  aria-label="Project Title"
                  name="projectTitle"
                  value={projectsDetails.title}
                  onChange={(e) => {
                    handleChange("title", e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="technologies">Technologies Used</label>
                <Chips
                  placeholder={projectsDetails.technologies.join(", ")}
                  value={projectsDetails.technologies}
                  onChange={(chips) => {
                    handleChange("technologies", chips);
                  }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="startDate">
                  Project Link / Github Repository
                </label>
                <input
                  type="url"
                  className="form-control"
                  aria-label="Project Link"
                  name="link"
                  required
                  onChange={(e) => {
                    handleChange("link", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="gpa">Description</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="description"
                  name="description"
                  required
                  value={projectsDetails.description}
                  onChange={(e) => {
                    handleChange("description", e.target.value);
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

export default ProjectDetails;
