import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function footer() {
  return (
    <footer className='w-100 py-4 flex-shrink-0'>
      <div className='container py-4'>
        <div className='row gy-4 text-center-mid'>
          <div className='col-lg-4 col-md-6 col-12'>
            <h6 className='h1 text-white'>ed.zukunft Hail Karosserie</h6>
            <p className='small text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className='small text-muted mb-0'>
              &copy; Copyrights. All rights reserved.
            </p>
          </div>
          <div className='col-lg-2 col-md-6 col-12'>
            <h5 className='text-white mb-3'>Quick links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  Get Strated
                </Link>
              </li>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-6 col-12'>
            <h5 className='text-white mb-3'>Quick links</h5>
            <ul className='list-unstyled fw-bold'>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  Get Strated
                </Link>
              </li>
              <li>
                <Link to='/' className='text-decoration-none text-muted fw-bold'>
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <h5 className='text-white mb-3'>Newsletter</h5>
            <p className='small text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <form action='#'>
              <div className='input-group mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-primary'
                  id='button-addon2'
                  type='button'>
                  <i className='bi bi-envelope-open'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
