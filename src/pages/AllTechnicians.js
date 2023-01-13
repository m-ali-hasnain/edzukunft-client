import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function AllTechnicians() {
  return (
    <>
      <Navbar />
      <div
        className='page-margin-top home-gradient'
        style={{ height: '450px' }}>
        <h1 className='pt-5'>
          Find skillful technicians according to your requirements.
        </h1>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='d-flex justify-content-center'>
            <figure className='card card-product-grid card-lg'>
              <a href='#' className='img-wrap' data-abc='true'>
                <img src='male.png' />{' '}
              </a>
              <figcaption className='info-wrap'>
                <div className='row'>
                  <div className='col-md-9 col-xs-9'>
                    {' '}
                    <a href='#' className='title' data-abc='true'>
                      Dell Xtreme 270
                    </a>{' '}
                    <span className='rated'>Laptops</span>{' '}
                  </div>
                  <div className='col-md-3 col-xs-3'>
                    <div className='rating text-right'>
                      {' '}
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i>{' '}
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i>{' '}
                      <span className='rated'>Rated 4.0/5</span>{' '}
                    </div>
                  </div>
                </div>
              </figcaption>
              <div className='bottom-wrap-payment'>
                <figcaption className='info-wrap'>
                  <div className='row'>
                    <div className='col-md-9 col-xs-9'>
                      {' '}
                      <a href='#' className='title' data-abc='true'>
                        $3,999
                      </a>{' '}
                      <span className='rated'>VISA Platinum</span>{' '}
                    </div>
                    <div className='col-md-3 col-xs-3'>
                      <div className='rating text-right'> #### 8787 </div>
                    </div>
                  </div>
                </figcaption>
              </div>
              <div className='bottom-wrap'>
                {' '}
                <a href='#' className='btn btn-primary float-right' data-abc='true'>
                  {' '}
                  Buy now{' '}
                </a>
                <div className='price-wrap'>
                  {' '}
                  <a
                    href='#'
                    className='btn btn-warning float-left'
                    data-abc='true'>
                    {' '}
                    Cancel{' '}
                  </a>{' '}
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllTechnicians;
