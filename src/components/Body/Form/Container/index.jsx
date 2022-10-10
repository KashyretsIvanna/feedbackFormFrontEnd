import styled from "styled-components";

export const MyButton = styled.button`
  background: #fad34f;
  border-radius: 500px;
  width: 218px;
  height: 10vh;
  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  margin-top: 30px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`;

export const Name = styled.input`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 30vw;
  height: 15vh;
  margin-top: 10px;
  padding: 20px;
`;

export const Message = styled(Name)`
  height: 189px;
  overflow: auto;
`;
export const H2 = styled.div`
  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 8vh;
  line-height: 130%;
  color: #3e3e3e;
`;
