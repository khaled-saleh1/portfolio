import React from "react";
import "./ProjectCard.scss";

import onyvaPic from "../../assets/images/onyvapic.png"; // Ensure the path is correct

export default function ProjectCard({projectInfo, isDark}) {
  const getImageSrc = imageUrl => {
    try {
      return imageUrl ? require(`${imageUrl}`) : onyvaPic;
    } catch {
      console.warn("Image not found, falling back to default image.");
      return onyvaPic; // Fallback to default image
    }
  };

  return (
    <div className={isDark ? "project-card-dark" : "project-card"}>
      <div className="project-media-container">
        {projectInfo.videoUrl ? (
          <iframe
            src={projectInfo.videoUrl}
            title={projectInfo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="project-media"
          ></iframe>
        ) : (
          <img
            src={getImageSrc(projectInfo.imageUrl)}
            alt={projectInfo.title}
            className="project-media"
          />
        )}
      </div>
      <div className="project-text-details">
        <h5
          className={
            isDark ? "project-text-title dark-mode-text" : "project-text-title"
          }
        >
          {projectInfo.title}
        </h5>
        <p
          className={
            isDark
              ? "subTitle project-text-desc dark-mode-text"
              : "subTitle project-text-desc"
          }
        >
          {projectInfo.description}
        </p>
        <div className="project-links">
          {projectInfo.githubLink && (
            <a
              href={projectInfo.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}
          {projectInfo.websiteLink && (
            <a
              href={projectInfo.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link website-link"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
