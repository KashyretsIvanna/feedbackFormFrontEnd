import styled from "styled-components";
import Links from "../Links";
import Circle from "../StyledFace";
import PinkCircle from "../Circle";

const FooterStyle = styled.footer`
background: #fafafa;
border: 1px solid #d8d8d8;
position: absolute;
width: 100vw;
height: 200px;
overflow: hidden;
display: flex;
align-items: center;
z-index:2;
`;


const Footer = () => {

  return (
    <FooterStyle>
      {/* Pink circle */}
      <PinkCircle
        width={"214px"}
        height={"208px"}
        top={"5px"}
        left={"4%"}
        color={"#F472B7"}
      >
        <Circle
          deg={"-40deg"}
          height={"50px"}
          width={"50px"}
          top={"40px"}
          left={"30px"}
        />
      </PinkCircle>
      {/* Yellow */}
      <PinkCircle
        width={"88.32px"}
        height={"85.84px"}
        top={"80px"}
        left={"calc(100% - 80px)"}
        color={"#FAD34F"}
      >
        <Circle
          deg={"-40deg"}
          height={"30px"}
          width={"30px"}
          top={"40px"}
          left={"48px"}
        />
      </PinkCircle>
      {/* Blue */}
      <PinkCircle
        width={"70.32px"}
        height={"70.84px"}
        top={"20px"}
        left={"calc(100% - 130px)"}
        color={"#46EBB0"}
      >
        <Circle
          deg={"-180deg"}
          height={"30px"}
          width={"30px"}
          top={"30px"}
          left={"15px"}
        />
      </PinkCircle>
      <Links />
    </FooterStyle>
  );
};

export default Footer;
