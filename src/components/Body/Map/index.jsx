import styled from "styled-components";
import styles from "./index.module.css";
import PinkCircle from "../../Circle";
import Circle from "../../StyledFace";
import { Right,Container } from "./Right";

const Map = () => {
  
  return (
    <Right>
      <Container className={styles.elipce}>
        {/* Pink */}
        <PinkCircle
          style={{ zIndex: "1" }}
          top={"500px"}
          left={"0px"}
          height={"208px"}
          width={"214px"}
          color={"#F472B7"}
        >
          <Circle
            deg={"-40deg"}
            height={"50px"}
            width={"50px"}
            top={"40px"}
            left={"30px"}
          />{" "}
        </PinkCircle>
        {/* Yellow */}
        <PinkCircle
          top={"400px"}
          left={"-20px"}
          height={"127px"}
          width={"127px"}
          color={"#FAD34F"}
        >
          <Circle
            deg={"-10deg"}
            height={"50px"}
            width={"50px"}
            top={"55px"}
            left={"70px"}
          />{" "}
        </PinkCircle>
      </Container>
    </Right>
  );
};

export default Map;
