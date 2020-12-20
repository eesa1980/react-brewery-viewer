import React from "react";
import { Container, Divider } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <Header$>
        <Container>
          <nav>
            <Link to={"/"}>
              <strong>Brewery Viewer</strong>
            </Link>
          </nav>
        </Container>
      </Header$>
      <Divider horizontal />
    </>
  );
};

export default Header;

const Header$ = styled.header`
  padding: 20px 0;
  background: #00b5ad;
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 9999;

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a,
    strong {
      color: #ffffff;

      &:hover {
        text-decoration-color: #ffffff;
      }
    }
  }
`;
