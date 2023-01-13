import React from "react";
import Chips from "react-chips";
const skillsDetails = ({ skillsDetails, setSkillsDetails }) => {
  const handleChange = (chips, id) => {
    setSkillsDetails((prev) => {
      return {
        ...prev,
        skillsDetails: prev.skillsDetails.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              value: chips,
            };
          } else {
            return { ...item };
          }
        }),
      };
    });
  };
  return (
    <>
      {skillsDetails.map((item, id) => (
        <div className="row mb-4" key={id}>
          <p className="text-success text-uppercase fw-light">{item.title}</p>
          <div className="mx-4 col">
            <label htmlFor={item.title.trim().replace(" ", "")}>
              Add {item.title}
            </label>
            <Chips
              placeholder={item.placeHolder.join(", ")}
              value={item.value}
              onChange={(chips) => {
                handleChange(chips, item.id);
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default skillsDetails;
