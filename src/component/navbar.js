import React from "react";
import "../style/style.css"

const NavBar=()=>{
    const handleClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gamerpubg5366@gmail.com&su=Hello&body=Hi, I wanted to reach out to say hello!", "_blank");
    };
    return(
        <div className="navbar ">
            <div className="name">Ahmed <span>Sobh</span> </div>
                <ul className="list-group-item">
                    <li><a href="#home" className="list-group-item active">Home</a></li>
                    <li><a href="#skills" className="list-group-item">Skills</a></li>
                    <li><a href="#projects" className="list-group-item">Projects</a></li>
                    <li><a href="#contact" className="list-group-item">Contact</a></li>
                </ul>
                <button className="btnn" onClick={handleClick}>Let's Talk </button>
        </div>

    )
}
export default NavBar;