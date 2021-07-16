import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ExploreWidget({ item }) {
  const { main, sub, more } = item;

  return (
    <Container>
      {main?.map((m, index) => (
        <Item key={index} to={m.link}>
          <Wrapper>
            <Title>{m.text}</Title>
            <i>ᐳ</i>
          </Wrapper>
        </Item>
      ))}
      {sub?.map((s, index) => (
        <Item key={index} to={s.link}>
          <SubTitle>{s.text}</SubTitle>
        </Item>
      ))}
      {more && (
        <Item to="">
          <SubTitle>더보기</SubTitle>
          <i>ᐳ</i>
        </Item>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 16%;
  padding: 40px 20px 0 0;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
`;

const Title = styled.h2`
  position: relative;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  width: 100%;
  overflow: hidden;
`;

const SubTitle = styled.h3`
  position: relative;
  font-size: 13px;
  color: #999;
  padding: 5px 20px 5px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;

  i {
    color: #999;
  }
`;
