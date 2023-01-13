import { Link } from 'react-router-dom';
import BlackNav from './BlackNav';

function navbar() {
  return (
    <>
      <BlackNav />
      <nav className='navbar navbar-expand-lg lower-nav'>
        <div className='container-fluid'>
          <Link className='navbar-brand green' to='/'>
            ed.zukunft Hail Karosserie
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link lower-nav-link fw-bold' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link lower-nav-link fw-bold' to='#'>
                  Technicians
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link lower-nav-link fw-bold' to='#'>
                  Resources
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link lower-nav-link fw-bold' to='#'>
                  Pricing
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link lower-nav-link fw-bold' to='#'>
                  Solution
                </Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
