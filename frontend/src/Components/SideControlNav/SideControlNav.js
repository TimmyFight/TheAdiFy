import styled from "styled-components";

const SideControlNavStyled = styled.div`
  width: 20%;
  height: 100%;
`;

function SideControlNav() {
  return (
    <SideControlNavStyled>
      <ul>
        <li>Position 1</li>
        <li>Position 2</li>
        <li>Position 3</li>
      </ul>
    </SideControlNavStyled>
  );
}

export default SideControlNav;
