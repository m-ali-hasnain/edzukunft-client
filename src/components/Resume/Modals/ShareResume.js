import React from "react";
import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function ShareResume({ show, setShow }) {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fs-4 font-roboto">Share Your Resume</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container d-flex w-50 align-items-center justify-content-between">
            <FacebookShareButton>
              <span className="share-icon">
                <FacebookIcon size={50} round />
              </span>
            </FacebookShareButton>
            <WhatsappShareButton>
              <span className="share-icon">
                <WhatsappIcon size={50} round />
              </span>
            </WhatsappShareButton>
            <TwitterShareButton>
              <span className="share-icon">
                <TwitterIcon size={50} round />
              </span>
            </TwitterShareButton>
            <RedditShareButton>
              <span className="share-icon">
                <RedditIcon size={50} round />
              </span>
            </RedditShareButton>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-success"></Modal.Footer>
      </Modal>
    </>
  );
}
export default ShareResume;
