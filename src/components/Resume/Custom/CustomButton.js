import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
const CustomButton = React.forwardRef((props, ref) => {
  return (
    <>
      <Button
        className={`d-flex align-items-center p-2 btn-${props.color} mx-2 resume-nav-item text-capitalize`}
        onClick={props.handleClick}
        ref={ref}
      >
        <span className="mx-2">
          <FontAwesomeIcon icon={props.icon} />
        </span>
        {props.title}
      </Button>
    </>
  );
});

export default CustomButton;
