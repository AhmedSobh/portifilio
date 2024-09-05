import React from "react";
import { Link } from 'react-router-dom';
import "../style/style.css"


const Footer = () => {
    const handleClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gamerpubg5366@gmail.com&su=Hello&body=Hi, I wanted to reach out to say hello!", "_blank");
    };
    return (
        <div id="contact" className="footer">
            <div className="content">
                <h1>
                    Have a project in mind? Let's get to work.👋📧
                </h1>
                <div className="btn-group">
                    <button className="btn-left-after-hover" onClick={handleClick}>Say Hello</button>
                   <a href="#projects" ><button className="btn-right-after-hover">My Projects</button></a>
                </div>
            </div>
            <div className="bottom-hr">
                <hr></hr>
                <div className="bottom-content">
                    <div className="left">
                        <div className="icons">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-behance"></i>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="list-group-item">
                            <li><a href="#home" className="list-group-item active">Home</a></li>
                            <li><a href="#skills" className="list-group-item">Skills</a></li>
                            <li><a href="#projects" className="list-group-item">Projects</a></li>
                            <li><a href="#contact" className="list-group-item">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;