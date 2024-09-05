import React from "react";
import "../style/style.css";
import { programer_pic } from "../imgs/imgs";

const Skills = () => {
    const handleClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gamerpubg5366@gmail.com&su=Hello&body=Hi, I wanted to reach out to say hello!", "_blank");
    };

    return (
        <div id="skills" className="skills">
            <div className="left">
                <img className="programer_pic" src={programer_pic} alt="Programmer" />
            </div>
            <div className="right">
                <h1>My Skills</h1>
                <br />
                <h6>
                    <strong style={{ color: "#E67E22" }}>Programming Languages:</strong> C#, Java Script
                    <br /><br />
                    <strong style={{ color: "#E67E22" }}>Web Technologies:</strong> React.js – HTML5 – CSS3-Axios – Fetch Api – local storage – React Router – JSX - Redux - React state – async/await
                    <br /><br />
                    <strong style={{ color: "#E67E22" }}>Programming Fundamentals:</strong> Data Structures - Object Oriented Programming - Object Oriented Analysis and Design - Solid Design Principles - Problem-Solving
                    <br /><br />
                    <strong style={{ color: "#E67E22" }}>Version control tools:</strong> Git
                </h6>
                <div className="btn-group">
                    <button className="btn-right-after-hover" onClick={handleClick}>Say Hello</button>
                    <a href="#projects"><button className="btn-right-after-hover">My Projects</button></a>
                </div>
            </div>
        </div>
    );
};

export default Skills;
