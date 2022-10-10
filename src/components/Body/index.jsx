import styled from "styled-components";
import Form from "./Form";
import Map from "./Map";
const Container = styled.div`
  background: papayawhip;
  height: calc(100vh - 200px);
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: left;
  align-items: top;
  position: relative;
  padding: 30px;
  max-width: 1800px;
  margin: 0 auto;
  padding-left: 10vw;
`;
const Body = () => {
  return (
    <Container>
      <Form />
      <Map />
    </Container>
  );
};

export default Body;
