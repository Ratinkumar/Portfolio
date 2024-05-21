import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatWebsite from "../../Assets/Projects/chat_ with_websites.png";
import EmotionDetection from "../../Assets/Projects/Emotion_detection_using_voice.png";
import HotelReview from "../../Assets/Projects/Hotel_reviews_ analysis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects <strong className="purple">Made </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatWebsite}
              isBlog={false}
              title="Chat-with-Websites"
              description="This project is basically to build a chatbot capable of interacting with websites,extracting information, and communicating in user-friendly manner.It leverages the power of LangChain and integrates it with a Streamlit GUI for an enhanced user experience."
              ghLink="https://github.com/Ratinkumar/Chat-with-Websites"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmotionDetection}
              isBlog={false}
              title="Emotion-detection-using-voice"
              description="I have to recognize the emotion of a person by taking his/her voice as the input. For this project the emotion doesn’t depend on the words of speaker it only depends on tone and pitch of what speaker spoke. I am recognizing 7 emotions :- anger, disgust, fear, happiness, neutral, sadness, surprise."
              ghLink="https://github.com/Ratinkumar/Emotion-detection-using-voice"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HotelReview}
              isBlog={false}
              title="Hotel-Review-Analysis"
              description="In this Project Hotel review analysis,covers data preprocessing, feature extraction using Doc2Vec and TF-IDF, training a Random Forest Classifier, and evaluating the model using ROC and Precision-Recall curves. It also includes visualizations such as word cloud for the review data and sentiment distribution for positive and negative reviews."
              ghLink="https://github.com/Ratinkumar/Hotel-Review-Analysis"
              //demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
