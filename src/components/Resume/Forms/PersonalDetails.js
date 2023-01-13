import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const MAX_LINKS = 5;
let currentLink = 0;
const PersonalDetails = ({ title, personalDetails, setPersonalDetails }) => {
  const handleChange = (field, value) => {
    setPersonalDetails((prev) => {
      return {
        ...prev,
        personalDetails: { ...prev.personalDetails, [field]: value },
      };
    });
  };
  return (
    <>
      <div className="container my-2">
        <p className="fs-6 text-uppercase text-success">{title}</p>
        <div className="row mb-2">
          <div className="col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John"
              aria-label="First name"
              name="firstName"
              value={personalDetails.firstName}
              onChange={(e) => {
                handleChange("firstName", e.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Doe"
              aria-label="Last name"
              name="lastName"
              value={personalDetails.lastName}
              onChange={(e) => {
                handleChange("lastName", e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="john@gmail.com"
              aria-label="Email"
              name="email"
              value={personalDetails.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="phoneNo">Phone No</label>
            <input
              type="text"
              className="form-control"
              placeholder="+92 000 1234567"
              aria-label="Phone no"
              name="phoneNo"
              value={personalDetails.phoneNo}
              required
              onChange={(e) => {
                handleChange("phoneNo", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label htmlFor="phoneNo">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Street 1 Block No 8"
              aria-label="Address"
              name="address"
              required
              value={personalDetails.address}
              onChange={(e) => {
                handleChange("address", e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Stack Web Developer"
              aria-label="Title"
              name="title"
              required
              value={personalDetails.title}
              onChange={(e) => {
                handleChange("title", e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mb-2">
          {" "}
          <p className="text-success text-uppercase fw-light">
            Links <span>({currentLink}/5)</span>{" "}
          </p>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              if (currentLink < MAX_LINKS) {
                setPersonalDetails((prev) => {
                  return {
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      socialLinks: [
                        ...prev.personalDetails.socialLinks,
                        { id: currentLink, value: "", linkType: "" },
                      ],
                    },
                  };
                });
                currentLink += 1;
              }
            }}
          >
            Add Links
          </button>
        </div>

        {/* Displaying Links Fields here */}
        <div className="row mb-2">
          {personalDetails.socialLinks.map((item, index) => (
            <div className="row mb-2" key={index}>
              <div className="col">
                <input
                  type="url"
                  className="form-control"
                  placeholder="Your Link Here"
                  aria-label="Link"
                  name="link"
                  value={item.value}
                  onChange={(e) => {
                    setPersonalDetails((prev) => {
                      return {
                        ...prev,
                        personalDetails: {
                          ...prev.personalDetails,
                          socialLinks: prev.personalDetails.socialLinks.map(
                            (it) =>
                              it.id === item.id
                                ? { ...it, value: e.target.value }
                                : { ...it }
                          ),
                        },
                      };
                    });
                  }}
                />
              </div>
              <div className="col d-flex">
                <Form.Select
                  size="sm"
                  value={item.linkType}
                  onChange={(e) => {
                    setPersonalDetails((prev) => {
                      return {
                        ...prev,
                        personalDetails: {
                          ...prev.personalDetails,
                          socialLinks: prev.personalDetails.socialLinks.map(
                            (it) =>
                              it.id === item.id
                                ? { ...it, linkType: e.target.value }
                                : { ...it }
                          ),
                        },
                      };
                    });
                  }}
                >
                  <option>Select...</option>
                  <option>Github</option>
                  <option>Linked In</option>
                  <option>Hacker Rank</option>
                  <option>Facebook</option>
                  <option>Twitter</option>
                </Form.Select>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    currentLink -= 1;
                    setPersonalDetails((prev) => {
                      return {
                        ...prev,
                        personalDetails: {
                          ...prev.personalDetails,
                          socialLinks: prev.personalDetails.socialLinks.filter(
                            (link) => link.id !== item.id
                          ),
                        },
                      };
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faRemove} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
