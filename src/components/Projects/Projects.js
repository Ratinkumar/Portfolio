import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heartDisease from "../../Assets/Projects/heart-disease.png";
import chatWebsite from "../../Assets/Projects/chat_ with_websites.png";
import EmotionDetection from "../../Assets/Projects/Emotion_detection_using_voice.png";
import HotelReview from "../../Assets/Projects/Hotel_reviews_ analysis.png";
import emojify from "../../Assets/Projects/emojify.png";
import dashboard from "../../Assets/Projects/Dashboard.png";

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
              imgPath={emojify}
              isBlog={false}
              title="Emojify"
              description="In this Project Emojify I have created a model which will predict an emoji based on my live expressions. This project is purely based on CNN and Computer Vision. For this project I have created my own dataset and then trained my model with that dataset. I mainly considered five emotions (i.e. Angry, Happy, Sad, Neutral and Shock)."
              ghLink="https://github.com/Ratinkumar/Emojify"
              // demoLink=""
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartDisease}
              isBlog={false}
              title="Heart Disease Prediction"
              description="Predicting HEART DISEASE using ML. This Project uses various python-based ML and Data Science libraries in an attempt to build a ML model capable of predicting whether or not someone has HEART DISEASE based on their MEDICAL ATTRIBUTES."
              ghLink="https://github.com/Ratinkumar/Heart_Disease_Prediction"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatWebsite}
              isBlog={false}
              title="Chat With Websites"
              description="This project is basically to build a chatbot capable of interacting with websites,extracting information, and communicating in user-friendly manner.It leverages the power of LangChain and integrates it with a Streamlit GUI for an enhanced user experience."
              ghLink="https://github.com/Ratinkumar/Chat-with-Websites"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmotionDetection}
              isBlog={false}
              title="Emotion Detection Using Voice"
              description="I have to recognize the emotion of a person by taking his/her voice as the input. For this project the emotion doesn't depend on the words of speaker it only depends on tone and pitch of what speaker spoke. I am recognizing 7 emotions :- anger, disgust, fear, happiness, neutral, sadness, surprise."
              ghLink="https://github.com/Ratinkumar/Emotion-detection-using-voice"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HotelReview}
              isBlog={false}
              title="Hotel Review Analysis"
              description="In this Project Hotel review analysis,covers data preprocessing, feature extraction using Doc2Vec and TF-IDF, training a Random Forest Classifier, and evaluating the model using ROC and Precision-Recall curves. It also includes visualizations such as word cloud for the review data and sentiment distribution for positive and negative reviews."
              ghLink="https://github.com/Ratinkumar/Hotel-Review-Analysis"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Ecommerce Sales Dashboard"
              description="This project involves analyzing e-commerce sales data and creating an interactive dashboard using Power BI. The dashboard provides insights into various aspects of sales performance and customer behavior."
              ghLink="https://github.com/Ratinkumar/Ecommerce-Sales-Dashboard"
              //demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
