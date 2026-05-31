import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/banner-bg.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["UI/UX Designer", "Editor", "Frontend Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, loopNum, isDeleting, delta]);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    } else if (isDeleting) {
      setDelta((prevDelta) => Math.max(prevDelta / 2, 50));
    }
  }, [loopNum, isDeleting, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className=" tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Hello, my name is Airil Jahran. I am a student at SMKN 1 Cianjur,
              majoring in Software and Game Development (PPLG). I have skills in
              UI/UX design, editing, and game developer. I am passionate
              aboutcontinuously improving my expertise in the technology and
              creative industry, particularly in interface design, multimedia
              editing, and game develover.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} className="Header" alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
