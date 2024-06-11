import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import { media } from "../styles/GlobalStyles";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;

  ${media.xl`
    margin: 0 5rem;
  `}
`;

const ProjectsContainer = styled.div`
  display: flex;
  gap: 4rem;
  width: 80%;
  margin-bottom: 5rem;

  ${media.small`
    flex-direction: column;
    gap: 2rem;
  `}

  ${media.medium`
    flex-direction: column;
  `}

  ${media.large`
    flex-direction: column;
    margin: 0 2rem;
  `}

  ${media.xl`
    padding-top: 2rem;
  `}
`;

const Title = styled.h2`
  font-size: 5rem;

  ${media.small`
    font-size: 2.5rem;
  `}

  ${media.medium`
    font-size: 4rem;
    margin-left: 2rem;
  `}

  ${media.large`
    font-size: 5rem;
    margin-left: 2rem;
  `}
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
        "This is a simple React application for creating and deleting notes",
      image: img3,
      technologies: ["React", "TypeScript", "Tailwind"],
      demo: "https://notes-5.netlify.app",
    },
  ];

  return (
    <StyledProjects>
      <Title>My Projects</Title>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </StyledProjects>
  );
}

export default Projects;
