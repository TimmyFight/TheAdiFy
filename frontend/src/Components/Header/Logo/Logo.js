import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
`;

function Logo(...props) {
  return <Title>{props.children} Tittle</Title>;
}

export default Logo;
