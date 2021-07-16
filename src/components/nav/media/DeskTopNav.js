import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import ExploreContent from "components/explore/ExploreContent";
import { useState } from "react";

export default function DeskTopNav() {
  const [isActive, setIsActive] = useState(false);

  const handleHover = (e, params) => {
    if (params) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <DeskTopContainer onClick={handleHover} onBlur={handleHover}>
      <Container>
        <Logo>
          <Link to="">Want</Link>
        </Logo>
        <LinkList>
          <ItemHover active onMouseOver={(e) => handleHover(e, "active")}>
            탐색
          </ItemHover>
          <ItemHover onMouseOver={handleHover}>
            <Link to="">커리어성장</Link>
          </ItemHover>
          <ItemHover onMouseOver={handleHover}>
            <Link to="">직군별 연봉</Link>
          </ItemHover>
          <ItemHover onMouseOver={handleHover}>
            <Link to="">이력서</Link>
          </ItemHover>
          <ItemHover onMouseOver={handleHover}>
            <Link to="">매치업</Link>
          </ItemHover>
          <ItemHover onMouseOver={handleHover}>
            <Link to="">프리랜서</Link>
          </ItemHover>
        </LinkList>
        <Aside>
          <LinkList>
            <Item>
              <img
                src="/images/magnify.png"
                alt="img"
                width="13px"
                height="13px"
              />
            </Item>
            <Item>
              <Link to="">회원가입 / 로그인</Link>
            </Item>
            <ItemLine>
              <ButtonLink to="">기업서비스</ButtonLink>
            </ItemLine>
          </LinkList>
        </Aside>
      </Container>
      {isActive && (
        <ExploreContent isActive={isActive} handleHover={handleHover} />
      )}
    </DeskTopContainer>
  );
}

const DeskTopContainer = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
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
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const ItemHover = styled(Item)`
  ${({ active }) => {
    return (
      active &&
      css`
        box-shadow: inset 0 -2px #36f;
      `
    );
  }}

  :hover {
    box-shadow: inset 0 -2px #ddd;
  }
`;

const Aside = styled.aside`
  display: flex;
  align-items: center;
  text-align: center;
`;

const ItemLine = styled(Item)`
  ::before {
    display: inline-block;
    content: "";
    width: 2px;
    height: 10px;
    background-color: #e1e2e3;
  }
`;

const ButtonLink = styled(Link)`
  font-size: 13px;
  color: #666;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  margin-left: 30px;
  padding: 5px 10px;
  font-weight: 400;
`;
