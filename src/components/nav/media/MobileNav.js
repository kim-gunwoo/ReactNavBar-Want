import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ExploreModal from "components/modal/ExploreModal";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileContainer>
      <Container>
        <Header>
          <Logo>
            <Link to="">Want</Link>
          </Logo>
          <Aside>
            <LinkList>
              <Item>
                <ButtonLink to="">회원가입 / 로그인</ButtonLink>
              </Item>
            </LinkList>
          </Aside>
        </Header>
        <Bottom>
          <LinkList>
            <Item>홈</Item>
            <Item>탐색</Item>
            <Item>
              <Link to="">커리어성장</Link>
            </Item>
          </LinkList>
          <LinkList>
            <Item>
              <img
                src="/images/search-magnifier.svg"
                alt="img"
                width="13px"
                height="13px"
              />
            </Item>
            <Item onClick={() => setIsOpen(true)}>☰</Item>
          </LinkList>
        </Bottom>
      </Container>
      {isOpen && <ExploreModal setIsOpen={setIsOpen} />}
    </MobileContainer>
  );
}

const MobileContainer = styled.div``;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  height: inherit;
  text-align: center;
  margin: 0;
`;

const Item = styled.li`
  float: left;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
`;

const Aside = styled.aside`
  display: flex;
  align-items: center;
  text-align: center;
`;

const ButtonLink = styled(Link)`
  font-size: 14px;
  color: #36f;
  border: 1px solid #36f;
  border-radius: 17px;
  margin-left: 30px;
  padding: 5px 10px;
  font-weight: 400;
`;
