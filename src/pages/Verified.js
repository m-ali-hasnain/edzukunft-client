import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { activateAccount } from "../redux/slices/companySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import checkImg from "../assets/images/check.png";
import unauthorizedImg from "../assets/images/unauthorized.png";
const Verified = () => {
  const [isVerified, setIsVerified] = React.useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const handleVerficiation = () => {
    let promise = dispatch(activateAccount(params));
    promise
      .unwrap()
      .then(() => {
        toast("Your account has been verified.");
        setIsVerified(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsVerified(false);
      });
  };
  useEffect(() => {
    handleVerficiation();
  }, []);
  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <div>
        {isVerified ? (
          <img src={checkImg} alt="verified" />
        ) : (
          <img src={unauthorizedImg} alt="Unauthorized Access" />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Verified;
