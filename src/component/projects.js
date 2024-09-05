import React, { useRef } from "react";
import "../style/style.css";
import DentellaVideo from"../imgs/imgs/Dentella.mp4"
import NtfsVideo from"../imgs/imgs/Ntfs.mp4"
import RestaurantVideo from"../imgs/imgs/Rest.mp4"
const ProjectCard = ({ title, description, video }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = async () => {
        try {
            if (videoRef.current) {
                await videoRef.current.play();
            }
        } catch (error) {
            console.error("Error playing video:", error);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className="content container-fluid">
            <div className="left">
                <h1>{title}</h1>
                <h3>{description}</h3>
                <button className="btn-demo">Visit GitHub</button>
            </div>
            <div className="right">
                <div className="project-video-container"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <div className="video-overlay">
                        <span>Hover to Play</span>
                    </div>
                    <video className="project-video" muted ref={videoRef}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div className="main-title">My Projects</div>
            <ProjectCard 
                title="Dentella" 
                video={DentellaVideo}
                description="Dentella is a platform designed to provide job opportunities for dental students..." 
            />
            <ProjectCard 
                title="Restaurant" 
                video={RestaurantVideo}
                description="I created a restaurant website that showcases popular dishes..." 
            />
            <ProjectCard 
                title="NFTs" 
                video={NtfsVideo}
                description="I created a project that displays popular NFT images..." 
            />
        </div>
    );
};

export default Projects;
