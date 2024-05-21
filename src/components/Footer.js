import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" id="contact">
      <Row>
        <Col className="contact-info">

          <h3>Ratin Kumar's Portfolio</h3>
          <p>
            Thank you for taking the time to visit my personal portfolio website. Let's stay connected through social media platforms.
          </p>

        </Col>
        <Col>

          <h3>Contact Info</h3>
          <div className="contact-info">
            <div>
              <FaPhone style={{ marginRight: "10px" }} />
              <span>+91-9649582237</span>
            </div>
            <div>
              <MdEmail style={{ marginRight: "10px" }} />
              <span>ratin1589kumar@gmail.com</span>
            </div>
            <div>
              <MdLocationOn style={{ marginRight: "10px" }} />
              <span>Bihar, India-848134</span>
            </div>
          </div>

        </Col>
        <Col md="4" className="footer-body">
          <h3>Let's Connect</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Ratinkumar"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/ratinpandey"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ratinkumar001/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ratin.pandey/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
