import styled from "styled-components";
const PinkCircle = styled.div`
  background: ${(props) => props.color};
  position: absolute;
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export default PinkCircle;
