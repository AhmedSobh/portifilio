import React from "react";
import NavBar from "../component/navbar";
import Skills from "../component/skills.js";
import Projects from "../component/projects.js";
import Footer from "../component/footer.js";
import {my_img}from"../imgs/imgs.js";

const Home = () => {
  const handleClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gamerpubg5366@gmail.com&su=Hello&body=Hi, I wanted to reach out to say hello!", "_blank");
};
  return (
    <div className="home">
      <NavBar></NavBar>
      <br></br>
      <hr></hr>
      <div id="home" className="home-content">
        <div className="left">
          <div className="icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <div className="main-content">
            <div className="my-content">
              <h1>👋​Hey there , It's Ahmed Sobh.</h1>
              <span></span>
            </div>
            <h3>Welcom to my creative Portfolio! I'm Ahmed Sobh , a Full-Stack Dev I graduated from the Faculty of Computers and Information in 2024. I have good experience in the field of front-end with React and also experience in the field of back-end with express mysql. </h3>
            <div className="btn-group">
                    <button className="btn-left-after-hover" onClick={handleClick}>Say Hello</button>
                    <a href="#projects" ><button className="btn-right-after-hover">My Projects</button></a>
            </div>
          </div>
        </div>
        <div className="right">
            <img className="my-img" src={my_img} alt="my_img"></img>
        </div>
      </div>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};
export default Home;
