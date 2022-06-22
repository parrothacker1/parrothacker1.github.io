import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import profile from './profile.jpg';
import './css/App.css';
import { BsInstagram as Instagram,BsCodeSlash as Code } from "react-icons/bs";
import { FiGithub as GitHub,FiTwitter as Twitter } from "react-icons/fi";
import { FaTelegramPlane as Telegram,FaAndroid as Android } from "react-icons/fa";
import { ImReddit as Reddit } from "react-icons/im";
import { TbBrandDiscord as Discord } from "react-icons/tb";
import { RiMusicLine as Music,RiComputerLine as Computer } from "react-icons/ri";
import { VscUnlock as Unlock,VscGlobe as Globe,VscTerminalLinux as Linux } from "react-icons/vsc";
import { Container,Row,Col } from "react-bootstrap";


function App() {
  return (
<div>
    <header className="App-header">
        <Container fluid className="first">
          <Row className='top-bar'>
            <Col className='d-flex flex-wrap justify-content-start align-items-center'>
              <img src={profile} alt="small_logo" className="logo" />
            </Col>
            <Col className="d-flex flex-wrap justify-content-end align-items-center">
              <Instagram className='icons' onClick={() => window.open("https://www.instagram.com/parrothacker1","_self")} />
              <Twitter className='icons' onClick={() => window.open("https://twitter.com/parrothacker1","_self")} />
              <GitHub className='icons' onClick={() => window.open("https://www.github.com/parrothacker1","_self")} />
              <Telegram className='icons' onClick={() => window.open("https://t.me/parrothacker1","_self")} />
              <Reddit className='icons' onClick={() => window.open("https://www.reddit.com/u/parrothacker1","_self")} />
              <Discord className='icons' onClick={() => window.open("https://discordapp.com/users/806844002271494144","_self")}/>
            </Col>
          </Row>
          <Row className='intro'>
            <Col fluid className="text d-flex justify-content-center align-items-center">

              <font>Hello Strangers there.I'm <b>parrothacker1</b>.I'm a <b>17 year old</b> fella from <b>India</b> who is interested in cybersec and dev stuff.</font>

            </Col>
            <Col fluid className="d-flex flex-wrap justify-content-center align-items-center">
              <img src={profile} alt="logo" className="avatar" />
            </Col>
          </Row>
        </Container>
        <Container fluid className="d-flex flex-wrap justify-content-center align-items-center">
          <Container fluid className="card d-flex flex-wrap justify-content-center align-items-center">
            <Container fluid className="card-text">
              <b>About</b><br></br><br></br>
              I'm a 17 year old student from India and I am currently pursuing my education. I'm interested in website development
              and android app development. Also I'm a cybersecurity enthusiast. I love to spend time on learning about linux too.I 
              use NixOS as my main distribution and i3 as my window manager. My aim is to complete OSCP and get certified as a 
              ethical hacker.
            </Container>
          </Container>
          <Container fluid className="card d-flex flex-wrap justify-content-center align-items-center">
            <Container fluid className="card-text">
              <b>Skills</b><br></br><br></br>
              <Container fluid>
                <Container fluid className="interest-card d-flex flex-wrap align-items-center"><Globe />&emsp;Web development</Container>
                <Container fluid className="interest-card d-flex flex-wrap align-items-center"><Android />&emsp;App development</Container>
                <Container fluid className="interest-card d-flex flex-wrap align-items-center"><Linux />&emsp;Linux</Container>
                <Container fluid className="interest-card d-flex flex-wrap align-items-center"><Unlock />&emsp;Pentesting</Container>
              </Container>
            </Container>
          </Container>
          <Container fluid className="card d-flex flex-wrap justify-content-center align-items-center">
            <Container fluid className='card-text'>
              <b>Interests</b><br></br><br></br>
              <Container fluid>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card"><Code />&emsp;Developing Projects</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card"><Computer />&emsp;Playing CTFs</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card"><Music />&emsp;Listening to Music</Container>
              </Container>
            </Container>
          </Container>
          <Container fluid className="card d-flex flex-wrap justify-content-center align-items-center">
            <Container fluid className='card-text'>
              <b>Social Platforms</b><br></br><br></br>
              <Container fluid>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card" onClick={() => window.open("https://www.instagram.com/parrothacker1","_self")}><Instagram />&emsp;Instagram</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card" onClick={() => window.open("https://twitter.com/parrothacker1","_self")}><Twitter />&emsp;Twitter</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card" onClick={() => window.open("https://www.github.com/parrothacker1","_self")}><GitHub />&emsp;GitHub</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card" onClick={() => window.open("https://t.me/parrothacker1","_self")}><Telegram />&emsp;Telegram</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card" onClick={() => window.open("https://www.reddit.com/u/parrothacker1","_self")}><Reddit />&emsp;Reddit</Container>
                <Container fluid className="d-flex flex-wrap align-items-center interest-card" onClick={() => window.open("https://discordapp.com/users/806844002271494144","_self")}><Discord />&emsp;Discord</Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <footer className='d-flex flex-wrap justify-content-center align-items-center'>
          <font>&copy; Copyrights All Reserved</font>
        </footer>
    </header>
</div>
  );
}

export default App;
