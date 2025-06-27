import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">Dominic Njenga </span>
            from <span className="purple"> Kenya</span>
            <br />
            I am a data engineer with a passion for building data pipelines.
            <br />
            I am a recent graduate from Dedan Kimathi Univesity having
            pursued a Bachelor's Degree in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games such as Badminiton.
            </li>
            <li className="about-activity">
              <ImPointRight />
              Reading books📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling🚌
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Dominic Njenga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
