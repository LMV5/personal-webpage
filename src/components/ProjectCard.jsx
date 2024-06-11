import styled from "styled-components";
import { media } from "../styles/GlobalStyles";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-blue-500);
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${media.small`

  `}

  ${media.medium`

  `}

  ${media.large`

  `}

  ${media.xl`

  `}
`;

const Image = styled.img`
  display: block;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  height: 30rem;
  object-fit: cover;
  object-position: top;

  ${media.small`
    max-height: 15rem;
  `}

  ${media.medium`
    height: 26rem;
  `}

  ${media.large`
    height: 36rem;
  `}
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 2rem;
  gap: 2rem;

  ${media.small`
    gap: 1rem;
  `}
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2rem;

  ${media.small`
    font-size: 1.5rem;
  `}

  ${media.medium`
    font-size: 2rem;
  `}
`;

const Description = styled.p`
  font-size: 2rem;

  ${media.small`
    font-size: 1.5rem;
  `}
`;

const TechnologyList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  text-align: center;

  ${media.small`
    flex-wrap: wrap;
    align-self: center;
    font-size: 1.5rem;
  `}

  ${media.medium`
    flex-direction: row;
    align-self: center;
    font-size: 1.5rem;
  `}
`;

const TechnologyItem = styled.li`
  border: 1px solid var(--color-blue-200);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
`;

const LinkDemo = styled.a`
  text-decoration: none;
  color: var(--color-blue-100);
  margin-bottom: 2rem;
  display: inline-block;
  align-self: end;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: var(--color-yellow);
  }

  ${media.small`
    margin-top: 2rem;
    align-self: start;
  `}
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
        <LinkDemo href={project.demo} target="_blank">
          See Demo &#8680;
        </LinkDemo>
      </Div>
    </StyledSection>
  );
}
