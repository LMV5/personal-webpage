import styled from "styled-components";

const StyledContacts = styled.div`
  margin-left: 10rem;
  font-size: 2.5rem;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  &:not(:first-child):not(:last-child) {
    padding-left: 2rem;
  }
  a {
    text-decoration: none;
    color: var(--color-grey-100);
    transition: all 0.1s ease-in-out 0.1s;

    &:hover {
      color: var(--color-blue-100);
    }
  }
`;

const P = styled.p`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 600;
`;

function Contacts() {
  return (
    <StyledContacts>
      <P>My contacts</P>
      <Ul>
        <Li>contacts {"{"}</Li>
        <Li>
          email:{" "}
          <a href="mailto:marina.lapteva@hotmail.com" title="Email to Marina">
            marina.lapteva@hotmail.com
          </a>
          ;
        </Li>
        <Li>
          github:{" "}
          <a
            href="https://github.com/lmv5"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            lmv5
          </a>
          ;
        </Li>
        <Li>
          linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/marina-lapteva/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            marina-lapteva
          </a>
          ;
        </Li>
        <Li>{"}"}</Li>
      </Ul>
    </StyledContacts>
  );
}

export default Contacts;
