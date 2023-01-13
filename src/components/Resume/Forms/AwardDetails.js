import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Collapse, Button } from "react-bootstrap";
const AwardDetails = ({ index, awardDetails, setAwardDetails }) => {
  const [open, setOpen] = React.useState(false);
  const handleChange = (field, value) => {
    setAwardDetails((prev) => {
      return {
        ...prev,
        awardDetails: prev.awardDetails.map((item) =>
          item.id === index ? { ...item, [field]: value } : { ...item }
        ),
      };
    });
  };

  const handleRemove = () => {
    setAwardDetails((prev) => {
      return {
        ...prev,
        awardDetails: prev.awardDetails.filter((item) => item.id !== index),
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
            Add Honor / Award
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Work at Hackathon"
                  aria-label="Honor / Award Details"
                  name="awardDetails"
                  value={awardDetails.title}
                  onChange={(e) => {
                    handleChange("title", e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default AwardDetails;
