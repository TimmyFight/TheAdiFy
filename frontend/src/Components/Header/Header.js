import styled from "styled-components";
import Logo from "./Logo/Logo";
import MainNavigation from "./MainNavigation/MainNavigation";

const StyledHeaderWrapper = styled.div`
  background-color: #5cdb95;
  margin: 0;
  height: 100px;
  display: flex;
  align-items: center;
`;

function Home() {
  return (
    <StyledHeaderWrapper>
      <Logo>TheAdiFy</Logo>
      <MainNavigation />
    </StyledHeaderWrapper>
  );
}

export default Home;
