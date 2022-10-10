import styled from "styled-components";
import styles from "../StyledFace/index.module.css";
const Styled = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(-140deg);
  width: 30%;
  height: 20%;
`;

const StyledLeft = styled(Styled)`
  right: 60.7%;
  top: 28.31%;
  position: absolute;
`;
const StyledRight = styled(Styled)`
  right: 30.24%;
  top: 28.26%;
  position: absolute;
`;
const StyledMouth = styled.div`
  width: 80%;
  height: 50%;
  position: absolute;
  background-size: contain;
  transform: rotateZ(40deg);
  background-repeat: no-repeat;
  right: 5.79%;
  bottom: 0%;
`;

const StyledContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.deg});
`;

const Circle = ({ top, left, height, width, deg }) => {
  return (
    <StyledContainer
      deg={deg}
      top={top}
      left={left}
      height={height}
      width={width}
    >
      <StyledRight className={styles.eye} />
      <StyledLeft className={styles.eye} />
      <StyledMouth className={styles.mouth} />
    </StyledContainer>
  );
};

export default Circle;
