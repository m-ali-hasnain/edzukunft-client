import React, { useState, useMemo, useRef } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import './index.css';
import { login, register } from '../../redux/slices/companySlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import useAuthorize from '../../hooks/useAuthorize';
import { setCurrentUser } from '../../redux/slices/currentUserSlice';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function CompanyForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [justifyActive, setJustifyActive] = useState('tab3');
  const options = useMemo(() => countryList().getData(), []);
  const company = useSelector((state) => state.company);
  const navigate = useNavigate();
  const eyeIconRef = useRef(null);
  const eyeIconSignUpRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordInputSignUpRef = useRef(null);

  const handleChange = (value) => {
    setValue(value);
  };

  const validateSignIn = (values) => {
    const errors = {};

    if (!values.emailSignIn) {
      errors.emailSignIn = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailSignIn)
    ) {
      errors.emailSignIn = 'Invalid email address';
    }

    if (!values.passwordSignIn) {
      errors.passwordSignIn = 'Password is required';
    } else if (values.passwordSignIn.length < 6) {
      errors.passwordSignIn =
        'Password too short (minimum 6 characters are required)';
    }

    return errors;
  };

  const validateSignUp = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Name too short';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
      errors.lastName = 'Name too short';
    }

    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.emailSignUp) {
      errors.emailSignUp = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailSignUp)
    ) {
      errors.emailSignUp = 'Invalid email address';
    }
    if (!values.passwordSignUp) {
      errors.passwordSignUp = 'Password is required';
    } else if (values.passwordSignUp.length < 6) {
      errors.passwordSignUp =
        'Password too short (minimum 6 characters are required)';
    }

    if (
      !values.confirmPasswordSignUp ||
      values.passwordSignUp !== values.confirmPasswordSignUp
    ) {
      errors.confirmPasswordSignUp = 'Password does not match';
    }
    return errors;
  };

  const formikForSignIn = useFormik({
    initialValues: {
      emailSignIn: '',
      passwordSignIn: '',
    },
    initialErrors: {
      emailSignIn: 'Required',
      passwordSignIn: 'Required',
    },
    validate: validateSignIn,
    onSubmit: (values) => {
      let data = {
        email: values.emailSignIn,
        password: values.passwordSignIn,
      };
      let promise = dispatch(login(data));
      promise
        .unwrap()
        .then((response) => {
          console.log('Response: ', response);
          if (company.status === '') {
            toast.success('Logged In Successfully.');
            // setting access token in localstorage
            localStorage.setItem('authToken', `Bearer ${response.data.token}`);
            dispatch(
              setCurrentUser({ ...response.data.user, isCompany: true })
            );
            navigate('/');
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    },
  });

  const formikForSignUp = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',

      emailSignUp: '',
      passwordSignUp: '',
      confirmPasswordSignUp: '',
    },
    initialErrors: {
      firstName: 'Required',
      lastName: 'Required',
      address: 'Required',
      // country: 'Required',
      emailSignUp: 'Required',
      passwordSignUp: 'Required',
      confirmPasswordSignUp: 'Required',
    },
    validate: validateSignUp,
    onSubmit: (values) => {
      let data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.emailSignUp,
        address: values.address,
        password: values.passwordSignUp,
        confirmPassword: values.confirmPasswordSignUp,
        country: 'Pakistan',
      };
      let promise = dispatch(register(data));
      promise
        .unwrap()
        .then(() => {
          toast.success('Registered Successfully.');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    },
  });

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

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

  const togglePasswordSignUp = (e) => {
    const eyeIconSignUpNode = eyeIconSignUpRef.current;
    const passwordInputSignUpNode = passwordInputSignUpRef.current;

    if (eyeIconSignUpNode.classList.contains('fa-eye')) {
      eyeIconSignUpNode.classList.remove('fa-eye');
      eyeIconSignUpNode.classList.add('fa-eye-slash');
      passwordInputSignUpNode.setAttribute('type', 'text');
    } else {
      eyeIconSignUpNode.classList.remove('fa-eye-slash');
      eyeIconSignUpNode.classList.add('fa-eye');
      passwordInputSignUpNode.setAttribute('type', 'password');
    }
  };

  return company.loading ? (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  ) : (
    <MDBContainer className='form-area'>
      <MDBTabs
        pills
        justify
        className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab3')}
            active={justifyActive === 'tab3'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab4')}
            active={justifyActive === 'tab4'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab3'}>
          {formikForSignIn.errors.emailSignIn &&
            formikForSignIn.touched.emailSignIn && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignIn.errors.emailSignIn}
                </span>
              </div>
            )}
          <MDBInput
            wrapperClass='mb-4'
            label='Email'
            id='emailSignIn'
            type='text'
            name='emailSignIn'
            required={true}
            onChange={formikForSignIn.handleChange}
            onBlur={formikForSignIn.handleBlur}
            value={formikForSignIn.values.emailSignIn}
          />

          {formikForSignIn.errors.passwordSignIn &&
            formikForSignIn.touched.passwordSignIn && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignIn.errors.passwordSignIn}
                </span>
              </div>
            )}
          <div className='form-outline mb-4'>
            <input
              type='password'
              className={
                formikForSignIn.values.passwordSignIn === ''
                  ? 'form-control'
                  : 'form-control active'
              }
              id='passwordSignIn'
              name='passwordSignIn'
              required='true'
              onChange={formikForSignIn.handleChange}
              onBlur={formikForSignIn.handleBlur}
              value={formikForSignIn.values.passwordSignIn}
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

          <div className='custom-row mb-4'>
            <MDBCheckbox
              name='flexCheck'
              value=''
              id='flexCheckDefault'
              label='Remember me'
              required={true}
            />
            <Link to='/company/forgetPassword' className='text-decoration-none'>
              Forgot password?
            </Link>
          </div>

          <MDBBtn
            className='mb-4 w-100 btn-success'
            onClick={formikForSignIn.handleSubmit}
            disabled={
              !(
                Object.values(formikForSignIn.errors).filter(Boolean).length ===
                0
              )
            }>
            Sign in
          </MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab4'}>
          {formikForSignUp.errors.firstName &&
            formikForSignUp.touched.firstName && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.firstName}
                </span>
              </div>
            )}
          <MDBInput
            wrapperClass='mb-4'
            label='First Name'
            id='firstName'
            type='text'
            name='firstName'
            required={true}
            onChange={formikForSignUp.handleChange}
            onBlur={formikForSignUp.handleBlur}
            value={formikForSignUp.values.firstName}
          />
          {formikForSignUp.errors.lastName &&
            formikForSignUp.touched.lastName && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.lastName}
                </span>
              </div>
            )}
          <MDBInput
            wrapperClass='mb-4'
            label='Last Name'
            id='lastName'
            type='text'
            name='lastName'
            required={true}
            onChange={formikForSignUp.handleChange}
            onBlur={formikForSignUp.handleBlur}
            value={formikForSignUp.values.lastName}
          />
          {formikForSignUp.errors.address &&
            formikForSignUp.touched.address && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.address}
                </span>
              </div>
            )}
          <MDBInput
            wrapperClass='mb-4'
            label='Address'
            id='address'
            type='text'
            name='address'
            required={true}
            onChange={formikForSignUp.handleChange}
            onBlur={formikForSignUp.handleBlur}
            value={formikForSignUp.values.address}
          />
          {formikForSignUp.errors.country &&
            formikForSignUp.touched.country && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.country}
                </span>
              </div>
            )}
          <Select
            placeholder='Select Country'
            options={options}
            value={value}
            onChange={handleChange}
            className='mb-4'
            id='country'
            type='text'
            name='country'
            required={true}
          />

          {formikForSignUp.errors.emailSignUp &&
            formikForSignUp.touched.emailSignUp && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.emailSignUp}
                </span>
              </div>
            )}

          <MDBInput
            wrapperClass='mb-4'
            label='Email'
            id='emailSignUp'
            type='email'
            name='emailSignUp'
            required={true}
            onChange={formikForSignUp.handleChange}
            onBlur={formikForSignUp.handleBlur}
            value={formikForSignUp.values.emailSignUp}
          />
          {formikForSignUp.errors.passwordSignUp &&
            formikForSignUp.touched.passwordSignUp && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.passwordSignUp}
                </span>
              </div>
            )}
          <div className='form-outline mb-4'>
            <input
              type='password'
              className={
                formikForSignUp.values.passwordSignUp === ''
                  ? 'form-control'
                  : 'form-control active'
              }
              id='passwordSignUp'
              name='passwordSignUp'
              required='true'
              onChange={formikForSignUp.handleChange}
              onBlur={formikForSignUp.handleBlur}
              value={formikForSignUp.values.passwordSignUp}
              ref={passwordInputSignUpRef}
            />
            <span
              ref={eyeIconSignUpRef}
              toggle='#password-field'
              className='fa fa-fw fa-eye field-icon toggle-password'
              onClick={togglePasswordSignUp}></span>
            <label className='form-label' for='passwordSignUp'>
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

          {formikForSignUp.errors.confirmPasswordSignUp &&
            formikForSignUp.touched.confirmPasswordSignUp && (
              <div className='d-flex ps-3 align-items-center'>
                <i className='bi bi-exclamation-circle-fill text-danger pb-1 pe-1 font-12'></i>
                <span className='text-danger text-start font-12'>
                  {formikForSignUp.errors.confirmPasswordSignUp}
                </span>
              </div>
            )}
          <MDBInput
            wrapperClass='mb-4'
            label='Confirm Password'
            id='confirmPasswordSignUp'
            type='password'
            name='confirmPasswordSignUp'
            required={true}
            onChange={formikForSignUp.handleChange}
            onBlur={formikForSignUp.handleBlur}
            value={formikForSignUp.values.confirmPasswordSignUp}
          />

          <MDBBtn
            className='mb-4 w-100 btn-success'
            onClick={formikForSignUp.handleSubmit}
            disabled={
              !(
                Object.values(formikForSignUp.errors).filter(Boolean).length ===
                0
              )
            }>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
      <ToastContainer />
    </MDBContainer>
  );
}

export default CompanyForm;
