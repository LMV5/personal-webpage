import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: grid;
  gap: 2rem;
`;

const Li = styled.li`
  border: 1px solid var(--color-blue-200);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
`;

function About() {
  return (
    <div>
      <h1>Frontend React Developer</h1>
      <p>Hello! I am Marina.</p>
      <p>
        I am a Junior Frontend Developer with eight years background in the
        banking sector. I am confident that my previous experience along with my
        strong problem-solving skills, make me a valuable addition to any
        development team.
      </p>
      <div>
        <h4>I use the follow technologies:</h4>
        <Ul>
          <Li>React</Li>
          <Li>Redux</Li>
          <Li>React Router</Li>
          <Li>Next.js</Li>
          <Li>Tailwind</Li>
          <Li>TanStack Query</Li>
          <Li>TypeScript</Li>
          <Li>Git</Li>
        </Ul>
      </div>
    </div>
  );
}

export default About;
