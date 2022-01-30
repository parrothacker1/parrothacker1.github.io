import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import profile from './profile.jpg';
import profile2 from "./profile2.jpg";
import './css/App.css';
import { BsInstagram,BsArrowDown } from "react-icons/bs";
import { FiHeart,FiGithub,FiTwitter } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { ImReddit } from "react-icons/im";
import { Container,Row,Col,ListGroup } from "react-bootstrap";


function App() {
  return (
    <div>
      <header className="App-header">
      <Container>
        <Container fluid className="first text-center d-flex flex-wrap align-items-center">
      <Container classNmae="text-center justify-content-center d-flex flex-wrap align-items-center">
            <font size="40" className="intro-text">Hello,I am parrothacker1</font>
      </Container>
      <Container fluid className="text-center justify-content-center d-flex flex-wrap align-items-center">
            <Row className="text-center d-flex flex-wrap justify-content-center">
                <Col className="text-center d-flex flex-wrap justify-content-center"><img src={profile} className="logo" alt="logo"/></Col>
                <Col className="text-center d-flex flex-wrap justify-content-center"><img src={profile2} className="logo"alt="logo"/></Col>
            </Row>
      </Container>
            <Container fluid className="text-center">
                <Row>
                    <Col className="text-center">
                        <BsInstagram onClick={() => window.open("https://www.instagram.com/parrothacker1","_self")} size="30"/>
                    </Col>
                    <Col className="text-center">
                        <FiGithub onClick={() => window.open("https://www.github.com/parrothacker1","_self")} size="30"/>
                    </Col>
                    <Col className="text-center">
                        <FaTelegramPlane onClick={() => window.open("https://t.me/parrothacker1","_self")} size="30"/>
                    </Col>
                    <Col className="text-center">
                        <FiTwitter size="30" onClick={() => window.open("https://twitter.com/parrothacker1","_self")} />
                    </Col>
                    <Col className="text-center">
                        <ImReddit onClick={() => window.open("https://www.reddit.com/u/parrothacker1","_self")} size="30"/>
                    </Col>
            </Row>
            </Container>
            <Container fluid className="text-center"><BsArrowDown onClick={() => window.open("#about","_self")} size="30"/></Container>
            </Container>
        </Container>
        <br></br>
        <br></br>
        <Container fluid className="parent_info">
            <br></br>
            <br></br>
            <Container fluid className="intro" id="about">
        I am a 17 year old fella who likes Ethical Hacking and Full Stack Development.I am currently pursuing my 12th education in CBSE. I have been working on my skills for the past 2 years with the help of ... ofc Google,Stackoverflow,Javapoint,etc. I am eagerly waiting to crack OSCP and get certified as a Ethical Hacker and to be a part-time Full-Stack Developer. I am also interested in maintaining and creating github projects. Always follows KISS principle (Keep It Simple Stupid).
        </Container>
        <br></br><br></br>
        <Container fluid className="text-center">
            <ListGroup className="list justify-content-center align-items-center text-center">
                <ListGroup.Item className="list-ele border-0"><MdWorkOutline /> Full Stack Development</ListGroup.Item>
                <ListGroup.Item className="list-ele border-0"><FiHeart /> Ethical Hacking</ListGroup.Item>
                <ListGroup.Item className="list-ele border-0"><FiHeart /> Linux Enthusiast</ListGroup.Item>
                <ListGroup.Item className="list-ele border-0"><FiHeart /> Arch Linux</ListGroup.Item>
                <ListGroup.Item className="list-ele border-0"><FiHeart /> GitHub Coder</ListGroup.Item>
            </ListGroup>
        </Container>
        <br></br>
        <Row>
            <Col className="text-center cpy">
                 &copy; Copyrights All Reserved
            </Col>
         </Row>
    </Container>
    </header>
    </div>
  );
}

export default App;
