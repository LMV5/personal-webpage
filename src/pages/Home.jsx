import styled from "styled-components";

const H2 = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10rem;
  color: var(--color-grey-30);
  letter-spacing: 1cap.5;
`;

function Home() {
  return (
    <div>
      <H2>Hello World</H2>
    </div>
  );
}

export default Home;
