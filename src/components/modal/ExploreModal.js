import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ExploreModal({ setIsOpen }) {
  const handleOpen = () => {
    setIsOpen(false);
  };

  return (
    <Container onClick={handleOpen}>
      <Header>
        <Logo>Want</Logo>
        <Button>X</Button>
      </Header>
      <MainContainer>
        <LinkItem to="">로그인</LinkItem>
        <Wrapper>
          <LinkItem to="">이력서</LinkItem>
          <LinkItem to="">매치업</LinkItem>
          <LinkItem to="">추천</LinkItem>
          <LinkItem to="">프리랜서</LinkItem>
        </Wrapper>
        <Wrapper>
          <LinkItem to="">직군별연봉</LinkItem>
          <LinkItem to="">커리어성장</LinkItem>
        </Wrapper>
        <Wrapper>
          <LinkItem to="">기업서비스</LinkItem>
        </Wrapper>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 50px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const LinkItem = styled(Link)`
  display: block;
  color: #333;
  margin-bottom: 15px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 400;
  color: #999;
  cursor: pointer;
`;

const MainContainer = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 500;
  border-top: 1px solid #eee;
`;
