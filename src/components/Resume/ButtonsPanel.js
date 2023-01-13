import React from "react";
import "./index.css";
import { Card, Collapse } from "react-bootstrap";
import CustomButton from "./Custom/CustomButton";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import {
  faAtom,
  faBriefcase,
  faSchool,
  faStar,
  faTv,
  faUser,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { save, setResumeId } from "../../redux/slices/resumeSlice";
import CvForm from "./Forms/CvForm";

const ButtonsPanel = ({ details, setDetails }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.resume.resumeId);
  const [btns, setBtns] = React.useState([
    { title: "Personal Details", icon: faUser, open: false },
    { title: "Education", icon: faSchool, open: false },
    { title: "Experience", icon: faBriefcase, open: false },
    { title: "Skillsets", icon: faAtom, open: false },
    { title: "Projects", icon: faTv, open: false },
    { title: "Certifications", icon: faStar, open: false },
    { title: "Additional", icon: faSchool, open: false },
  ]);

  const handleClick = () => {
    const data = {
      id: id,
      body: { details: details },
    };
    let promise = dispatch(save(data));
    promise
      .unwrap()
      .then((res) => {
        console.log("res:");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <Card className="w-100 custom-card">
        <Card.Body className="custom-card-body">
          {btns.map((btn, index) => (
            <div key={index}>
              <div
                className={`px-4 py-2 ${
                  index !== btns.length - 1 ? "border-bottom" : ""
                }`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p
                    className="rounded-circle p-2 bg-secondary text-white text-center"
                    style={{ width: "40px" }}
                  >
                    <FontAwesomeIcon icon={btn.icon} />
                  </p>

                  <p>{btn.title}</p>

                  <p
                    id={btn.title.replace(" ", "")}
                    onClick={() => {
                      setBtns((prev) => {
                        return prev.map((b) =>
                          b.title === btn.title
                            ? { ...b, open: !b.open }
                            : { ...b }
                        );
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowDown} />
                  </p>
                  {/* Display Form Here */}
                </div>
              </div>
              <Collapse in={btn.open}>
                <div id={btn.title.replace(" ", "")}>
                  <CvForm
                    title={btn.title}
                    details={details}
                    setDetails={setDetails}
                  />
                </div>
              </Collapse>
            </div>
          ))}
        </Card.Body>
        <Card.Footer className="text-muted w-100 d-flex align-items-center justify-content-center">
          <CustomButton
            title="Save"
            color="success"
            icon={faSave}
            handleClick={handleClick}
          />
        </Card.Footer>
      </Card>
    </>
  );
};

export default ButtonsPanel;
