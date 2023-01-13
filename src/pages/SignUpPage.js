import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SignUpPage() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 signUp-left-background'>
            <div className='signUp-column'>
              <span className='badge bg-success'>BUSINESS</span>
              <h2 className='pb-4'>
                For <span className='text-success'>Companies</span>
              </h2>
              <p className='pb-2'>
                We are the market-leading technical interview platform to
                identify and hire technicians with the right skills.
              </p>
              <Link
                className='btn btn-success text-decoration-none text-center text-white px-5 py-2 mb-4'
                to='/signUp/company'>
                Login
              </Link>
              <p className='mb-0'>Don't have an account?</p>
              <p>
                <Link
                  to='/signUp/company'
                  className='text-dark fw-bold text-decoration-none'>
                  Sign Up
                </Link>
                .
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='signUp-column d-flex justify-content-center align-items-center flex-column'>
              <h2 className='pb-4'>
                For <span className='text-primary'>Technicians</span>
              </h2>
              <p className='pb-2'>
                Join over 21 million technicians, having practical skills, find
                for work, and get hired.
              </p>
              <Link
                className='btn btn-light text-decoration-none text-center border border-dark px-5 py-2 mb-4'
                to='/signUp/technician'>
                Login
              </Link>
              <p className='mb-0'>Don't have an account?</p>
              <p>
                <Link
                  to='/signUp/technician'
                  className='text-dark fw-bold text-decoration-none'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
