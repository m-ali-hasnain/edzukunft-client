import React, { useState } from "react";

import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useFormik } from "formik";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { sendResetPasswordLink } from "../../redux/slices/companySlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";

function ForgetPassword() {
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formikForForgetPassword = useFormik({
    initialValues: {
      email: "",
    },
    initialErrors: {
      email: "Required",
    },
    validate,
    onSubmit: (values) => {
      const data = { email: values.email };
      let promise = dispatch(sendResetPasswordLink(data));
      promise
        .unwrap()
        .then(() => {
          setSubmit(!submit);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          console.log("Error: ", err);
          toast.error(err.message);
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="container-fluid page-margin-top text-center">
        <h3 className="mt-3 text-center">Forgot Password?</h3>

        <MDBContainer className="form-area">
          <MDBTabsContent>
            <MDBTabsPane show={!submit}>
              <p>Please Enter your email address to recover credentials.</p>
              {formikForForgetPassword.errors.email &&
                formikForForgetPassword.touched.email && (
                  <div className="d-flex ps-3 align-items-center">
                    <i className="bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12"></i>
                    <span className="text-danger text-start font-12">
                      {formikForForgetPassword.errors.email}
                    </span>
                  </div>
                )}

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="email"
                type="email"
                name="email"
                required={true}
                onChange={formikForForgetPassword.handleChange}
                onBlur={formikForForgetPassword.handleBlur}
                value={formikForForgetPassword.values.email}
              />
              <MDBBtn
                className="mb-4 w-100 btn-success"
                onClick={formikForForgetPassword.handleSubmit}
                disabled={
                  !(
                    Object.values(formikForForgetPassword.errors).filter(
                      Boolean
                    ).length === 0
                  )
                }
              >
                Submit
              </MDBBtn>
            </MDBTabsPane>
            <MDBTabsPane show={submit}>
              <Alert
                variant="success"
                onClose={() => setSubmit(!submit)}
                dismissible
              >
                <Alert.Heading>Please Check Your Email</Alert.Heading>
                <p>This is one time generated link, it will expire in 10s.</p>
              </Alert>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
}

export default ForgetPassword;
