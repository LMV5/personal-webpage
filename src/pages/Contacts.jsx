import styled from "styled-components";

const StyledContacts = styled.div`
  margin-left: 10rem;
  font-size: 4rem;
`;

const ContactsList = styled.ul`
  list-style: none;
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

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 7rem;
  font-weight: 600;
`;

function Contacts() {
  return (
    <StyledContacts>
      <Title>My contacts</Title>
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
