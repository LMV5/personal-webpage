import styled from "styled-components";
import { media } from "../styles/GlobalStyles";

const StyledContacts = styled.div`
  font-size: 2.5rem;
  margin-left: 2rem;

  ${media.small`
    margin-top: 2rem;
  `}

  ${media.xl`
    margin: 0 5rem;
  `}
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 5rem;
  font-weight: 600;

  ${media.small`
    font-size: 2.5rem;
  `}

  ${media.medium`
    font-size: 4rem;
  `}
`;

const ContactsList = styled.ul`
  list-style: none;

  ${media.small`
    font-size: 1.6rem;
  `}

  ${media.medium`
    font-size: 2rem;
  `}
`;

const ContactItem = styled.li`
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

function Contacts() {
  return (
    <StyledContacts>
      <Title>My Contacts</Title>
      <ContactsList>
        <ContactItem>contacts {"{"}</ContactItem>
        <ContactItem>
          email:{" "}
          <a href="mailto:marina.lapteva@hotmail.com" title="Email to Marina">
            marina.lapteva@hotmail.com
          </a>
          ;
        </ContactItem>
        <ContactItem>
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
        </ContactItem>
        <ContactItem>
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
        </ContactItem>
        <ContactItem>{"}"}</ContactItem>
      </ContactsList>
    </StyledContacts>
  );
}

export default Contacts;
