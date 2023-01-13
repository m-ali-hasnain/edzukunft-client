import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const useAuthorize = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  React.useEffect(() => {
    if (Object.keys(currentUser).length !== 0) {
      navigate("/");
    }
  });
};

export default useAuthorize;
