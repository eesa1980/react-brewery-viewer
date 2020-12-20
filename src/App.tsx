import React, { FC } from "react";
import Routes from "./component/common/Routes";
import styled from "styled-components";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

const App: FC = ({ children }) => {
  return (
    <Wrapper$>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Wrapper$>
  );
};

const Wrapper$ = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  * {
    color: rgba(0, 0, 0, 0.87);
    a,
    a * {
      color: #00b5ad;

      &.disabled,
      &.disabled * {
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }

  a: hover {
    text-decoration: underline;
    text-decoration-color: #00b5ad;
  }
`;

export default App;
