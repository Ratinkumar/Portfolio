import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <h3>I'm <span className="purple">Ratin Kumar </span></h3>
            
            <br />
            I've been pursuing Bachelor's of Technology in Computer Science at Graphic Era Hill University, Dehradun.
            <br />
            I aspire to become a Software Engineer because, as a computer science engineer, I thoroughly enjoy delving into the latest technological breakthroughs.
            <br />
            In my academic journey so far, I have acquired proficiency in programming languages like C, C++, Python, and Java. I also have a strong command of Data Structures and Algorithms. My personal area of interest lies in Machine Learning.
            <br />
            <br />
            <span className="purple">Email : </span> <a href="mailto:ratin1589kumar.com">Ratin Kumar</a>
            <br />
            <br />
            <span className="purple">Place : </span> Bihar, India.
            <br />
            {/* Apart from coding, some other activities that I love to do! */}

          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "
            The pain of discipline is better than the pain of regret."{" "}
          </p>
          <footer className="blockquote-footer">Rk.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
