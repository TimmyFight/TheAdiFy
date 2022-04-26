import styled from "styled-components";
import Logo from "./Logo/Logo";
import MainNavigation from "./MainNavigation/MainNavigation";

const StyledHeaderWrapper = styled.div`
  background: green;
`;

function Home() {
  return (
    <StyledHeaderWrapper>
      <Logo></Logo>
      <MainNavigation />
    </StyledHeaderWrapper>
  );
}

export default Home;
