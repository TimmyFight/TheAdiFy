import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #05386b;
  margin: 0 40px;
`;

function Logo({ children }) {
  return <Title>{children}</Title>;
}

export default Logo;
