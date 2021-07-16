import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "components/nav/Nav";
import { MOBILE_SCREEN } from "utils/useResponsive";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <MainContainer>MainContainer</MainContainer>
    </BrowserRouter>
  );
}

const MainContainer = styled.main`
  padding-top: 60px;

  @media only screen and (max-width: ${MOBILE_SCREEN}px) {
    padding-top: 120px;
  }
`;
