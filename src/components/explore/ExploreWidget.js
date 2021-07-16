import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ExploreWidget({ item }) {
  const { main, sub, more } = item;

  return (
    <Container>
      {main?.map((m, index) => (
        <Item key={index} to={m.link}>
          <Title>{m.text}</Title>
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

const Title = styled.h2`
  position: relative;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
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
  display: block;
`;
