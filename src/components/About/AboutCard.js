import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
<<<<<<< HEAD
            Hi Everyone, my name is <span className="purple">Dominic Njenga </span>
            from <span className="purple"> Kenya</span>
            <br />
            I am a data engineer with a passion for building data pipelines.
            <br />
            I am a recent graduate from Dedan Kimathi Univesity having
            pursued a Bachelor's Degree in Information Technology.
=======
            Hi Everyone, I am <span className="purple">Dominic Njenga </span>
            from <span className="purple"> Kenya</span>
            <br />
            I am currently a freelancing software developer.
            <br />
            I am currently in my final year of study at Dedan Kimathi Univesity
            pursing B.sc Information Technology.
>>>>>>> f9b7f3e876a3cbc537a1f8339b2d35af1b735c0a
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
<<<<<<< HEAD
              <ImPointRight /> Playing Games such as Badminton.
=======
              <ImPointRight /> Playing Games such as Chess.♟️
>>>>>>> f9b7f3e876a3cbc537a1f8339b2d35af1b735c0a
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
