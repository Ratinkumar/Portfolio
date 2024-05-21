import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiReact,
  DiPython,
  DiJava,
  DiGit,
  DiLinux,
} from "react-icons/di";
import {
  SiAmazonaws,
  SiOracle,
} from "react-icons/si";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiDialogflow,
} from "react-icons/si";
import { 
  GrMysql 
} from "react-icons/gr";
import { 
  FaGithub,
  FaPhp,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>C++</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Python</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Java</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>HTML</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>CSS</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Javascript</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>React.js</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Git</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>GitHub</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrMysql />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>MySQL</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Oracle</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>php</small>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Numpy</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Pandas</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Scikit-learn</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Tensorflow</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDialogflow />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Dialogflow</small>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Aws</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Jupyter</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>VS Code</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <small style={{ display: 'block', marginTop: '1px', fontSize: '25px' }}>Linux</small>
      </Col>
    </Row>
  );
}



export default Techstack;
