import { useRef, useEffect } from "react";
import styled from "styled-components";
import ExploreWidget from "components/explore/ExploreWidget";

export default function ExploreContent({ isActive, handleHover }) {
  const pRef = useRef();
  const cRef = useRef();

  useEffect(() => {
    if (isActive) {
      pRef.current.style.height = cRef.current.scrollHeight + "px";
    } else {
      pRef.current.style.height = "0";
    }
  }, [isActive]);

  return (
    <OutsideContainer onMouseOver={handleHover}>
      <BackGroundContainer ref={pRef} onMouseOver={(e) => e.stopPropagation()}>
        <Container ref={cRef}>
          {list.map((item, index) => (
            <ExploreWidget key={index} item={item} />
          ))}
        </Container>
      </BackGroundContainer>
    </OutsideContainer>
  );
}

const OutsideContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const BackGroundContainer = styled.div`
  position: relative;
  background-color: #fff;
  height: 0px;
  max-height: 625px;
  overflow: hidden;
  transition: height 0.5s;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`;

const list = [
  {
    main: [{ text: "영업", link: "/" }],
    sub: [
      { text: "기업영업", link: "/" },
      { text: "외부영업", link: "/" },
      { text: "영업관리자", link: "/" },
      { text: "기술영업", link: "/" },
      { text: "주요고객사 담당자", link: "/" },
      { text: "솔루션 컨설턴트", link: "/" },
      { text: "해외영업", link: "/" },
    ],
    more: "/",
  },
  {
    main: [{ text: "미디어", link: "/" }],
    sub: [
      { text: "콘텐츠 크리에이터", link: "/" },
      { text: "피디", link: "/" },
      { text: "영상편집가", link: "/" },
      { text: "에디터", link: "/" },
      { text: "비디오제작", link: "/" },
      { text: "작가", link: "/" },
      { text: "출판 기획자", link: "/" },
    ],
    more: "/",
  },
  {
    main: [{ text: "인사", link: "/" }],
    sub: [
      { text: "인사담당", link: "/" },
      { text: "리쿠루터", link: "/" },
      { text: "조직문화", link: "/" },
      { text: "평가보상", link: "/" },
      { text: "헤드헌터", link: "/" },
      { text: "HRD", link: "/" },
      { text: "HRBP", link: "/" },
    ],
    more: "/",
  },
  {
    main: [{ text: "게임제작", link: "/" }],
    sub: [
      { text: "게임 기획자", link: "/" },
      { text: "게임 그래픽 디자이너", link: "/" },
      { text: "모바일 게임 개발자", link: "/" },
      { text: "게임 클라이언트 개발자", link: "/" },
      { text: "게임 아티스트", link: "/" },
      { text: "유니티 개발자", link: "/" },
      { text: "게임 서버 개발자", link: "/" },
    ],
    more: "/",
  },
  {
    main: [{ text: "금융", link: "/" }],
    sub: [
      { text: "회계 담당", link: "/" },
      { text: "재무 담당자", link: "/" },
      { text: "IR", link: "/" },
      { text: "투자증권", link: "/" },
      { text: "재무분석가", link: "/" },
      { text: "애널리스트", link: "/" },
      { text: "내부통제 담당자", link: "/" },
    ],
    more: "/",
  },
  {
    main: [
      { text: "엔지니어링 설계", link: "/" },
      { text: "물류 무역", link: "/" },
      { text: "제조 생상", link: "/" },
      { text: "의료 바이오", link: "/" },
      { text: "교육", link: "/" },
      { text: "법률 법집행기관", link: "/" },
      { text: "식 음료", link: "/" },
      { text: "건설 시설", link: "/" },
      { text: "공공 복지", link: "/" },
    ],
  },
];
