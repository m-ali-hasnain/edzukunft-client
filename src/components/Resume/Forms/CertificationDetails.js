import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Collapse, Button } from "react-bootstrap";
const CertificationDetails = ({
  index,
  certificationDetails,
  setCertificationDetails,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleChange = (field, value) => {
    setCertificationDetails((prev) => {
      return {
        ...prev,
        certificationDetails: prev.certificationDetails.map((item) =>
          item.id === index ? { ...item, [field]: value } : { ...item }
        ),
      };
    });
  };

  const handleRemove = () => {
    setCertificationDetails((prev) => {
      return {
        ...prev,
        certificationDetails: prev.certificationDetails.filter(
          (item) => item.id !== index
        ),
      };
    });
  };
  return (
    <>
      <div className="container my-2">
        <div className="d-flex my-2">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="outline-secondary"
            className="w-100 mx-2"
          >
            Certificate Name
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
                <label htmlFor="certificateTitle">Certificate Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Game Development WorkShop etc"
                  aria-label="Certification Details"
                  name="certificationDetails"
                  value={certificationDetails.title}
                  onChange={(e) => {
                    handleChange("title", e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="certificateLink">Certificate Link</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="drive.google.com/1/drf12ck"
                  aria-label="Certificate Link"
                  name="certificateLink"
                  value={certificationDetails.link}
                  onChange={(e) => {
                    handleChange("link", e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="issuedBy">Issued By</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Issued By"
                  name="issuedBy"
                  required
                  onChange={(e) => {
                    handleChange("issuedBy", e.target.value);
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

export default CertificationDetails;
