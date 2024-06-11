import styled from "styled-components";
import { media } from "../styles/GlobalStyles";
import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiReactquery,
  SiReactrouter,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

const StyledHome = styled.div`
  margin: 0 5rem;
  width: 70vw;
  display: flex;
  flex-direction: column;

  ${media.medium`
    margin: 0 3rem;
  `}

  ${media.xl`
    margin: 0 5rem;
  `}
`;

const PrimaryTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 5rem;

  ${media.small`
    font-size: 2.2rem;
    margin: 2rem 0;
  `}

  ${media.medium`
    font-size: 3rem;
  `}

  ${media.large`
    font-size: 4rem;
  `}
`;

const SecondaryTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 2rem;

  ${media.small`
    font-size: 1.4rem;
  `}

  ${media.medium`
    font-size: 2rem;
  `}
`;

const SubTitle = styled.h4`
  color: var(--color-blue-100);
  font-size: 3rem;
  margin-bottom: 3rem;

  ${media.small`
    font-size: 1.8rem;
  `}

  ${media.medium`
    font-size: 1.8rem;
  `}
`;

const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 4rem;

  ${media.small`
    font-size: 1.4rem;
  `}

  ${media.medium`
    font-size: 1.6rem;
  `}
`;

const TechnologyList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  ${media.small`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.medium`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${media.large`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`;

const TechnologyItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-blue-200);
  border-radius: 2rem;
  width: 13rem;
  height: 13rem;
  font-size: 1.7rem;
  cursor: pointer;

  ${media.small`
    width: 10rem;
    height: 10rem;
    font-size: 1.2rem;
  `}

  ${media.medium`
    width: 10rem;
    height: 10rem;
    font-size: 1.2rem;
  `}

  &:hover .html-icon {
    color: var(--color-html);
  }

  &:hover .css-icon {
    color: var(--color-css);
  }

  &:hover .javascript-icon {
    color: var(--color-javascript);
  }

  &:hover .react-icon {
    color: var(--color-react);
  }

  &:hover .redux-icon {
    color: var(--color-redux);
  }

  &:hover .tailwind-icon {
    color: var(--color-tailwind);
  }

  &:hover .router-icon {
    color: var(--color-router);
  }

  &:hover .next-icon {
    color: var(--color-next);
  }

  &:hover .query-icon {
    color: var(--color-query);
  }

  &:hover .typescript-icon {
    color: var(--color-typescript);
  }

  &:hover .git-icon {
    color: var(--color-git);
  }
`;

const Icon = styled.div`
  color: var(--color-grey-100);
  font-size: 6rem;
  transition: all 0.2s;

  ${media.small`
    font-size: 4.5rem;
  `}

  ${media.medium`
    font-size: 4.5rem;
  `}
`;

const DownloadButton = styled.a`
  text-decoration: none;
  color: var(--color-grey-100);
  background-color: var(--color-green);
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-blue-100);
  transition: transform 0.2s ease;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;

  &:hover {
    background-color: var(--color-blue-500);
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.small`
    display: block;
    margin-top: 2rem;
    align-self: start;
    font-size: 1.5rem;
  `}
`;

function Home() {
  return (
    <StyledHome>
      <PrimaryTitle>Junior Frontend Developer</PrimaryTitle>
      <SecondaryTitle>Hello! I am Marina.</SecondaryTitle>
      <Description>
        I'm a self-taught frontend developer, focusing on React and Next.js and
        I'm open to learning new technologies despite this. My journey into
        programming started while I was on maternity leave, and I'm motivated to
        learn and grow in this dynamic field. It's great to see the immediate
        results of my work. I'm looking forward to working with a team to tackle
        tasks together and contributing value to your company.
      </Description>
      <div>
        <SubTitle>I use the following technologies:</SubTitle>
        <TechnologyList>
          <TechnologyItem>
            <Icon className="html-icon">
              <IoLogoHtml5 />
            </Icon>{" "}
            HTML
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="css-icon">
              <IoLogoCss3 />
            </Icon>{" "}
            CSS
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="javascript-icon">
              <IoLogoJavascript />
            </Icon>{" "}
            JavaScript
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="react-icon">
              <IoLogoReact />
            </Icon>{" "}
            React
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="redux-icon">
              <SiRedux />
            </Icon>{" "}
            Redux
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="router-icon">
              <SiReactrouter />
            </Icon>{" "}
            React Router
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="next-icon">
              <RiNextjsLine />
            </Icon>{" "}
            Next.js
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="tailwind-icon">
              <SiTailwindcss />
            </Icon>{" "}
            Tailwind
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="query-icon">
              <SiReactquery />
            </Icon>{" "}
            React Query
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="typescript-icon">
              <SiTypescript />
            </Icon>{" "}
            TypeScript
          </TechnologyItem>
          <TechnologyItem>
            <Icon className="git-icon">
              <FaGitAlt />
            </Icon>{" "}
            Git
          </TechnologyItem>
        </TechnologyList>
        <SubTitle>My Resume:</SubTitle>
        <DownloadButton href="/web-developer-Marina-Lapteva.pdf" download>
          Download Resume
        </DownloadButton>
      </div>
    </StyledHome>
  );
}

export default Home;
