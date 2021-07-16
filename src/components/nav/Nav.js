import styled from "styled-components";
import DeskTopNav from "components/nav/media/DeskTopNav";
import MobileNav from "components/nav/media/MobileNav";

import { MOBILE_SCREEN, useIsMobile } from "utils/useResponsive";

export default function Nav() {
  const isMobile = useIsMobile();

  return (
    <BackgroudContainer>
      {isMobile ? <MobileNav /> : <DeskTopNav />}
    </BackgroudContainer>
  );
}

const BackgroudContainer = styled.nav`
  position: fixed;
  width: 100%;
  /* height: 50px; */
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: ${MOBILE_SCREEN}px) {
    /* height: 100px; */
  }
`;
