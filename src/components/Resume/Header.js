import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Breadcrumb, Button } from 'react-bootstrap';
import CustomButton from './Custom/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEdit, faShare } from '@fortawesome/free-solid-svg-icons';
import ChooseTemplate from './Modals/ChooseTemplate';
import ReactToPrint from 'react-to-print';
import ShareResume from './Modals/ShareResume';
const Header = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const [shareModal, setShareModal] = React.useState(false);
  return (
    <div className='container d-flex flex-column'>
      <Container>
        <Breadcrumb className='font-14'>
          <Breadcrumb.Item href='#'>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Resume</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Navbar bg='transparent' expand='lg' className='resume-navbar'>
        <Container>
          <Navbar.Brand>
            <p className='resume-navbar-brand fw-normal'>
              {props.title} <span className='d-block'>Resume</span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-evenly'>
            <Nav>
              <Nav.Item>
                <CustomButton
                  color='success'
                  title='Change template'
                  icon={faEdit}
                  show={show}
                  setShow={setShow}
                  handleClick={() => setShow(true)}
                />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#link'>Last Updated 2 minutes ago</Nav.Link>
              </Nav.Item>
              <Nav.Item className='resume-nav-item'>
                <div className='d-flex'>
                  <CustomButton
                    color='success'
                    title='Share'
                    icon={faShare}
                    handleClick={() => {
                      setShareModal(true);
                    }}
                  />
                  <ReactToPrint
                    trigger={() => (
                      <Button
                        className={`d-flex align-items-center p-2 mx-2 resume-nav-item text-capitalize`}
                        variant='success'>
                        <span className='mx-2'>
                          <FontAwesomeIcon icon={faDownload} />
                        </span>
                        Download
                      </Button>
                    )}
                    content={() => ref.current}
                  />
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <ChooseTemplate show={show} setShow={setShow} />
          <ShareResume show={shareModal} setShow={setShareModal} />
        </Container>
      </Navbar>
      {/* <nav class='navbar navbar-expand-lg navbar-light bg-transparent resume-navbar'>
        <div class='container'>
          <span class='navbar-brand'>
            <p className='resume-navbar-brand'>
              Muhammad Hasnain Ali's <span class='d-block'>Resume</span>
            </p>
          </span>
          <button
            aria-controls='basic-navbar-nav'
            type='button'
            aria-label='Toggle navigation'
            class='navbar-toggler collapsed'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='justify-content-evenly navbar-collapse collapse'
            id='basic-navbar-nav'>
            <div class='navbar-nav'>
              <div class='nav-item'>
                <CustomButton
                  color='success'
                  title='Change template'
                  icon={faEdit}
                  show={show}
                  setShow={setShow}
                  handleClick={() => setShow(true)}
                />
              </div>
              <div class='nav-item'>
                <a href='#link' data-rr-ui-event-key='#link' class='nav-link'>
                  Last Updated 2 minutes ago
                </a>
              </div>
              <div class='nav-item'>
                <div className='d-flex'>
                  <CustomButton
                    color='success'
                    title='Share'
                    icon={faShare}
                    handleClick={() => {
                      setShareModal(true);
                    }}
                  />
                  <ReactToPrint
                    trigger={() => (
                      <Button
                        className={`d-flex align-items-center p-2 mx-2 resume-nav-item`}
                        variant='success'>
                        <span className='mx-2'>
                          <FontAwesomeIcon icon={faDownload} />
                        </span>
                        Download
                      </Button>
                    )}
                    content={() => ref.current}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
});

export default Header;
