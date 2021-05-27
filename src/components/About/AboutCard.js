import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karthik Manoharan </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> I completed my diploma in computer science and engineering from BSF Institute of Technology Bengaluru, Karnataka. I am currently a student at Masai learning Full Stack Android Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
