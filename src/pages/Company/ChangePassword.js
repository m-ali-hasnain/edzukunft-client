import React, { useRef } from 'react';
import {
  MDBContainer,
  MDBTabsContent,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';

import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import useAuthorize from '../../hooks/useAuthorize';

import { resetPassword } from '../../redux/slices/companySlice';

function ChangePassword() {
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companyID, token } = useParams();
  const eyeIconRef = useRef(null);
  const passwordInputRef = useRef(null);

  const validateFormData = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password =
        'Password too short (minimum 6 characters are required)';
    }

    if (!values.confirmPassword || values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password does not match';
    }
    return errors;
  };

  const formikFormValidation = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    initialErrors: {
      password: 'Required',
      confirmPassword: 'Required',
    },
    validate: validateFormData,
    onSubmit: (values) => {
      let data = {
        body: {
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        params: {
          companyID: companyID,
          token: token,
        },
      };
      let promise = dispatch(resetPassword(data));
      promise
        .unwrap()
        .then(() => {
          toast.success('Password Updated Successfully.');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        })
        .catch((err) => {
          toast.error(
            'Token expires. Please generate request to reset password again.'
          );
        });
    },
  });

  // Authorization Hook
  useAuthorize();

  const togglePassword = (e) => {
    const eyeIconNode = eyeIconRef.current;
    const passwordInputNode = passwordInputRef.current;

    if (eyeIconNode.classList.contains('fa-eye')) {
      eyeIconNode.classList.remove('fa-eye');
      eyeIconNode.classList.add('fa-eye-slash');
      passwordInputNode.setAttribute('type', 'text');
    } else {
      eyeIconNode.classList.remove('fa-eye-slash');
      eyeIconNode.classList.add('fa-eye');
      passwordInputNode.setAttribute('type', 'password');
    }
  };

  return company.loading ? (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  ) : (
    <Container className='d-flex flex-column align-items-center justify-content-center'>
      <p className='fs-3 text-uppercase font-roboto fw-bold'>
        Update Your Password
      </p>
      <MDBContainer className='form-area'>
        <MDBTabsContent>
          {formikFormValidation.errors.password &&
            formikFormValidation.touched.password && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikFormValidation.errors.password}
                </span>
              </div>
            )}
            
           <div className='form-outline mb-4'>
              <input
                type='password'
                className={
                  formikFormValidation.values.password === ''
                    ? 'form-control'
                    : 'form-control active'
                }
                id='password'
                name='password'
                required='true'
                onChange={formikFormValidation.handleChange}
                onBlur={formikFormValidation.handleBlur}
                value={formikFormValidation.values.password}
                ref={passwordInputRef}
              />
              <span
                ref={eyeIconRef}
                toggle='#password-field'
                className='fa fa-fw fa-eye field-icon toggle-password'
                onClick={togglePassword}></span>
              <label className='form-label' for='passwordSignIn'>
                Password
              </label>
              <div className='form-notch'>
                <div className='form-notch-leading'></div>
                <div
                  className='form-notch-middle'
                  style={{ width: '63.2px' }}></div>
                <div className='form-notch-trailing'></div>
              </div>
            </div>

          {formikFormValidation.errors.confirmPassword &&
            formikFormValidation.touched.confirmPassword && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikFormValidation.errors.confirmPassword}
                </span>
              </div>
            )}
          <MDBInput
            wrapperClass='mb-4'
            label='Confirm Password'
            id='confirmPassword'
            type='password'
            name='confirmPassword'
            required={true}
            onChange={formikFormValidation.handleChange}
            onBlur={formikFormValidation.handleBlur}
            value={formikFormValidation.values.confirmPassword}
          />

          <MDBBtn
            className='mb-4 w-100 btn-success'
            onClick={formikFormValidation.handleSubmit}
            disabled={
              !(
                Object.values(formikFormValidation.errors).filter(Boolean)
                  .length === 0
              )
            }>
            Change Password
          </MDBBtn>
        </MDBTabsContent>
        <ToastContainer />
      </MDBContainer>
    </Container>
  );
}

export default ChangePassword;
