import React, {useContext} from "react";
import "./Project.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";
import {portfolioProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!portfolioProjects.display) {
    return null;
  }

  return (
    <div id="projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="projects-container" id="projects-section">
          <div>
            <h1 className="projects-heading">My Recent Works</h1>
            <div className="projects-cards-div">
              {portfolioProjects.projectList.map((project, i) => {
                return (
                  <ProjectCard
                    key={i}
                    isDark={isDark}
                    projectInfo={{
                      title: project.title,
                      description: project.description,
                      videoUrl: project.videoUrl,
                      imageUrl: project.imageUrl,
                      githubLink: project.githubLink,
                      websiteLink: project.websiteLink
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
