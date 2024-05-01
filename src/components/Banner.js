import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../assets/img/Header.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "UI/UX Designer", "Cybersecurity Enthusiast"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1500);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            
            <h1>
              Hello,<br />
              this is <b>K S Sumukha Vasista</b><span className="wrap"><b>{text}</b></span>
            </h1>
            <p>Welcome! I'm, a Web Designer/Developer, UI/UX Designer dedicated to blending creativity with innovation. With knowledge in Web developing field, I thrive on challenges, crafting solutions that inspire and transform. My journey is fueled by a passion for learning and a commitment to excellence. Beyond work, I'm an Photographer, VFX Creator. Let's collaborate, innovate, and make a difference together.</p>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={Header} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
