import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const ProjectsContainer = styled.div`
  display: flex;
  margin: 0 10rem;
  gap: 3rem;
  justify-content: space-between;
  margin-top: 3rem;
`;
const Title = styled.h2`
  font-size: 7rem;
  margin-left: 10rem;
`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: "A-rent App",
      description:
        "A web application for listing rental properties and managing reservations",
      image: img1,
      technologies: ["Next.js", "MongoDB", "Tailwind", "NextAuth.js"],
      demo: "https://a-rent.vercel.app",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A web application allows to search for weather forecasts by desired location",
      image: img2,
      technologies: ["JavaScript", "API", "CSS/SCSS"],
      demo: "https://weather-appp1.netlify.app/",
    },
    {
      id: 3,
      title: "Notes App",
      description:
        "This is a simple React + TypeScript application for creating and deleting notes",
      image: img3,
      technologies: ["React", "TypeScript", "Tailwind"],
      demo: "https://notes-5.netlify.app",
    },
  ];

  return (
    <>
      <Title>Projects I've build so far</Title>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
}

export default Projects;
