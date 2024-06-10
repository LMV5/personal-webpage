import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-blue-500);
  max-width: 30%;
`;

const Image = styled.img`
  display: block;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  height: 16rem;
  width: 100%;
  object-fit: cover;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 2rem;
  gap: 2rem;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2rem;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const TechnologyList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: space-around;
`;

const TechnologyItem = styled.li`
  border: 1px solid var(--color-blue-200);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
`;

const Button = styled.a`
  text-decoration: none;
  color: var(--color-blue-100);
  margin-bottom: 2rem;
`;

export default function ProjectCard({ project }) {
  return (
    <StyledSection key={project.id}>
      <Image src={project.image} alt="" />
      <Div>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <TechnologyList>
          <TechnologyItem>{project.technologies[0]}</TechnologyItem>
          <TechnologyItem>{project.technologies[1]}</TechnologyItem>
          <TechnologyItem>{project.technologies[2]}</TechnologyItem>
        </TechnologyList>
        <Button href={project.demo} target="_blank">
          See Demo &#8680;
        </Button>
      </Div>
    </StyledSection>
  );
}
