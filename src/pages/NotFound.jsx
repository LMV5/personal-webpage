import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/GlobalStyles";

const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20rem auto;
  width: 70vw;

  ${media.small`
    margin: 4rem auto;
  `}

  ${media.medium`
    margin: 10rem auto;
  `}
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--color-red);

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

const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-grey-100);

  ${media.small`
    font-size: 1.4rem;
  `}

  ${media.medium`
    font-size: 1.6rem;
  `}
`;

const LinkGoHome = styled(Link)`
  text-decoration: none;
  color: var(--color-blue-100);
  display: inline-block;
  align-self: center;
  transition: all ease-in-out 0.2s;
  margin-top: 2rem;

  &:hover {
    color: var(--color-yellow);
  }
`;

function NotFound() {
  return (
    <StyledNotFound>
      <Title>Page Not Found</Title>
      <Description>The page you are looking for does not exist.</Description>
      <LinkGoHome href="/"> &#8656; Go Home</LinkGoHome>
    </StyledNotFound>
  );
}

export default NotFound;
