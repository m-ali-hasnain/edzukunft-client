import React from "react";
import { Modal, Card } from "react-bootstrap";
import templateImg from "../../../assets/images/template4.png";
import resumeIcon from "../../../assets/images/resumeIcon.png";
import "./style.css";
function ChooseTemplate({ show, setShow }) {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="title">
              <span>
                <img
                  src={resumeIcon}
                  alt="Resume Icon"
                  width={50}
                  height={50}
                />
              </span>
              Resume Builder
            </p>
            <p className="subtitle fs-6 fw-light subtitle">
              Build Resume with us
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container d-flex align-items-center justify-content-between">
            <div>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <img
                    src={templateImg}
                    width="100%"
                    height={400}
                    alt="Choose Template"
                  />
                </Card.Body>
                <Card.Footer>Choose Template</Card.Footer>
              </Card>
            </div>
            <div>
              <Card
                style={{ width: "100%" }}
                onClick={() => {
                  console.log("hi");
                }}
              >
                <Card.Body>
                  <img
                    src={templateImg}
                    width="100%"
                    height={400}
                    alt="Choose Template"
                  />
                </Card.Body>
                <Card.Footer>Choose Template</Card.Footer>
              </Card>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-success"></Modal.Footer>
      </Modal>
    </>
  );
}
export default ChooseTemplate;
