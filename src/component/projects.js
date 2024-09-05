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
                description="Dentella is a platform designed to provide job opportunities for dental students, enabling them to connect with patients and offer low-cost or free treatments to help them pass their practical exams. Key features include allowing students to submit articles to aid patients, enabling patients to post requests for student assistance" 
            />
            <ProjectCard 
                title="Restaurant" 
                video={RestaurantVideo}
                description=" created a restaurant website that showcases popular dishes and their prices. Users can log in to access additional features like adding dishes to their favorites and purchasing them. The main page highlights the most popular items, providing an engaging browsing experience." 
            />
            <ProjectCard 
                title="NFTs" 
                video={NtfsVideo}
                description="I created a project that displays popular NFT images and their prices. The main page includes sections for pages, portfolio, shop, and blog, along with user statistics and total sales figures. Users can view and place bids on NFTs from this collection. The goal is to provide an engaging and informative platform for NFT enthusiasts." 
            />
        </div>
    );
};

export default Projects;
