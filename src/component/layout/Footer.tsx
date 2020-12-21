import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <>
      <Footer$>
        <Container>
          <a
            href={"https://www.linkedin.com/in/lewis-james-odwin-71b4a08a/"}
            target={"__blank"}
          >
            Lewis James-Odwin
          </a>
        </Container>
      </Footer$>
    </>
  );
};

export default Footer;

const Footer$ = styled.header`
  padding: 20px 0;
  background: #00b5ad;
  color: #ffffff;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    color: #ffffff!important;

    &:hover {
      text-decoration-color: #ffffff;
    }
`;
