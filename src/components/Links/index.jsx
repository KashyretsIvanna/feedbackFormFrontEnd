import styled from "styled-components";
import linkedin from "../../img/in.png";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import pinterest from "../../img/pinterest.png";
import { nanoid } from "nanoid";

const Container = styled.div`
  width: max-content;
  dispaly: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 35vw;
  z-index: 100;
`;

const Image = styled.img`
  margin-left: 10px;
`;

const Links = () => {
  const images = [linkedin, twitter, facebook, pinterest];

  return (
    <Container>
      {images.map((el) => (
        <a key={nanoid()} href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix">
          <Image width="13" height="13" src={el} alt="" />
        </a>
      ))}
    </Container>
  );
};

export default Links;
