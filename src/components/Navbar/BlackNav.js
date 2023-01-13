import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutCompany } from "../../redux/slices/companySlice";
import { logoutTechnician } from "../../redux/slices/technicianSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setCurrentUser } from "../../redux/slices/currentUserSlice";
import "./index.css";

function BlackNav() {
  let currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    let promise;
    if (currentUser.isCompany) {
      promise = dispatch(logoutCompany());
    } else {
      promise = dispatch(logoutTechnician());
    }
    promise
      .unwrap()
      .then(() => {
        toast.success("Logged Out Successfully");
        // Removing access token from localstorage
        localStorage.removeItem("authToken");
        dispatch(setCurrentUser({}));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="black-nav bg-dark d-flex align-items-center justify-content-end">
      <Link className="nav-link black-nav-link" to="/contactUs">
        Contact Us
      </Link>
      <div className="seperator my-auto"></div>
      {Object.keys(currentUser).length !== 0 ? (
        <>
          <Link
            className="nav-link black-nav-link d-flex align-items-center justify-content-center"
            to={"/resume"}
          >
            Resume Builder
          </Link>
          <div className="seperator my-auto"></div>
          <Link
            className="nav-link black-nav-link d-flex align-items-center justify-content-center"
            to={currentUser.isCompany ? "/company/edit" : "/technician/edit"}
          >
            Profile
            <span className="ms-2 pb-1">
              <i className="bi bi-person-circle"></i>
            </span>
          </Link>
          <div className="seperator my-auto"></div>
          <Link
            className="nav-link black-nav-link"
            to="/"
            onClick={handleLogout}
          >
            Log Out
            <span className="ms-2 pb-1">
              <i className="bi bi-box-arrow-right mb-1"></i>
            </span>
          </Link>
        </>
      ) : (
        <Link className="nav-link black-nav-link" to="/signUp">
          Log In <span className="ms-1">{">"}</span>
        </Link>
      )}
      {/* Toast Container Here */}
      <ToastContainer />
    </div>
  );
}

export default BlackNav;
