import React, { useMemo, useRef, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import { useFormik } from 'formik';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import {
  logoutCompany,
  updateProfileCompany,
} from '../../redux/slices/companySlice';

import { toast } from 'react-toastify';
import { setCurrentUser } from '../../redux/slices/currentUserSlice';
import { uploadImage } from '../../services/index';

function EditCompany() {
  const [value, setValue] = useState();
  const [profileUrl, setProfileUrl] = React.useState('');
  const options = useMemo(() => countryList().getData(), []);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const eyeIconSignUpRef = useRef(null);
  const passwordInputSignUpRef = useRef(null);

  const handleChange = (value) => {
    setValue(value);
  };

  const validateSignUp = (values) => {
    const errors = {};

    if (values.firstName === '') {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Name too short';
    }

    if (values.lastName === '') {
      errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
      errors.lastName = 'Name too short';
    }

    if (values.address === '') {
      errors.address = 'Required';
    }

    // if (!values.country) {
    //   errors.country = 'Required';
    // }

    // if (!values.emailSignUp) {
    //   errors.emailSignUp = "Required";
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailSignUp)
    // ) {
    //   errors.emailSignUp = "Invalid email address";
    // }

    // if (!values.passwordSignUp) {
    //   errors.passwordSignUp = "Password is required";
    // } else if (values.passwordSignUp.length < 6) {
    //   errors.passwordSignUp =
    //     "Password too short (minimum 6 characters are required)";
    // }
    // if (
    //   !values.confirmPasswordSignUp ||
    //   values.passwordSignUp !== values.confirmPasswordSignUp
    // ) {
    //   errors.confirmPasswordSignUp = "Password does not match";
    // }
    return errors;
  };

  const formikForSignUp = useFormik({
    initialValues: {
      firstName: currentUser.firstName || '',
      lastName: currentUser.lastName || '',
      address: currentUser.address || '',
      country: currentUser.country || '',
      emailSignUp: currentUser.email || '',
      passwordSignUp: '',
      confirmPasswordSignUp: '',
    },
    initialErrors: {
      firstName: 'Required',
      lastName: 'Required',
      address: 'Required',
      // country: 'Required',
    },
    validate: validateSignUp,
    onSubmit: (values) => {
      let data = {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        country: 'Pakistan',
        profilePicUrl: profileUrl,
      };
      let promise = dispatch(updateProfileCompany(data));
      promise
        .unwrap()
        .then((response) => {
          toast.success('Updated Successfully');
          dispatch(setCurrentUser({ ...response.data.user, isCompany: true }));
        })
        .catch((err) => {
          toast.error(err.message);
          if (err.status === 440) {
            dispatch(logoutCompany());
            dispatch(setCurrentUser({}));
          }
        });
    },
  });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const promise = uploadImage(file);
      promise
        .then((data) => {
          setProfileUrl(data.url);
        })
        .catch((err) => {
          toast.error('Error while uploading profile picture');
        });
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

  return (
    <>
      <Navbar />
      <div className='page-margin-top text-center'>
        <h1>Edit Company</h1>
      </div>
      {/* profile pic here */}
      <div className='text-center'>
        <img
          src={currentUser.profilePicUrl}
          className='rounded-circle'
          style={{ width: 150 }}
          alt='Avatar'
        />
      </div>
      <MDBContainer className='form-area'>
        <MDBTabsContent>
          <MDBTabsPane show={true}>
            <div className='form-outline mb-4'>
              <input
                wrapperClass='mb-4'
                type='file'
                className='form-control'
                onChange={(e) => {
                  handleFileUpload(e);
                }}
              />
              <div className='form-notch'>
                <div className='form-notch-leading'></div>
                <div className='form-notch-trailing'></div>
              </div>
            </div>

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
              onChange={formikForSignUp.handleChange}
              onBlur={formikForSignUp.handleBlur}
              value={formikForSignUp.values.emailSignUp}
              disabled
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
              disabled
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
              onChange={formikForSignUp.handleChange}
              onBlur={formikForSignUp.handleBlur}
              value={formikForSignUp.values.confirmPasswordSignUp}
              disabled
            />

            <MDBBtn
              className='mb-4 w-100 btn-success'
              onClick={formikForSignUp.handleSubmit}
              disabled={
                !(
                  Object.values(formikForSignUp.errors).filter(Boolean)
                    .length === 0
                )
              }>
              Update Profile
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default EditCompany;
