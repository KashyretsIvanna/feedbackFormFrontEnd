import styled from "styled-components";
import cloud from "../../img/cloud.png"
const StyledCloud = styled.img`
  opacity: ${(props) => props.opacity};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  position: absolute;
  z-index:-0,01;
`;

const Cloud = ({ opacity, width, height, top, left }) => {
  return (
    <StyledCloud
      opacity={opacity}
      width={width}
      height={height}
      top={top}
      left={left}
      src={cloud}
      alt=""
    
    />
  );
};

export default Cloud;
