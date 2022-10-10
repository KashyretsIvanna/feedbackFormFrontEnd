import { Route, Routes } from "react-router";
import styled from "styled-components";
import Form from "./Form";
import Comments from "./Comments";
import Cloud from "../Cloud";

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
      <Cloud
        opacity={"0.5"}
        width={"15vw"}
        height={"10vw"}
        top={"16.48%"}
        left={"-4.79%"}
      />
      <Cloud
        opacity={"0.7"}
        width={"13vw"}
        height={"8vw"}
        top={"43.46%"}
        left={"-6.39%"}
      />
      <Cloud
        opacity={"0.8"}
        width={"5vw"}
        height={"3vw"}
        top={"80.08%"}
        left={"7.01%"}
      />
      <Cloud
        opacity={"0.4"}
        width={"16vw"}
        height={"12vw"}
        top={"85.08%"}
        left={"9.79%"}
      />
      <Cloud
        opacity={"0.6"}
        width={"11vw"}
        height={"7vw"}
        top={"76.08%"}
        left={"25.79%"}
      />
      <Cloud
        opacity={"0.4"}
        width={"10vw"}
        height={"7vw"}
        top={"76.08%"}
        left={"55.79%"}
      />
      <Cloud
        opacity={"0.4"}
        width={"10vw"}
        height={"7vw"}
        top={"30.08%"}
        left={"55.79%"}
      />
       <Cloud
        opacity={"0.5"}
        width={"12vw"}
        height={"9vw"}
        top={"5.08%"}
        left={"60.79%"}
      />
      <Cloud
        opacity={"0.3"}
        width={"7vw"}
        height={"5vw"}
        top={"5.08%"}
        left={"45.79%"}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form />
              <Map />
            </>
          }
        />

        <Route path="/comments" element={<Comments />} />
      </Routes>
    </Container>
  );
};

export default Body;
