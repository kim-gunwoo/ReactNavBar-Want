import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}
body {
  font-size: 14px;
  line-height: 1.4;
  color: #333333;
  font-family: -apple-system, Helvetica, Arial, "hiragino kaku gothic pro", meiryo, "Microsoft YaHei", "ms pgothic", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
}
ul,ol {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button{
  background-color: transparent;
  border: none;
  outline: none;
}
`;
