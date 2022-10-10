import { useEffect, useState } from "react";
import { Container, H2 } from "./Container";
import { Name } from "./Container";
import { MyButton } from "./Container";
import { Message } from "./Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const L = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;
  color: pink;
  font-size: 20px;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const local = "http://localhost:8080/feedbacks";
  const URL = "https://lit-forest-96253.herokuapp.com/feedbacks";

  const submitForm = () => {
    const data = { firstName: name, email: email, message: message };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "*/*",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <L to="/comments">Comments</L>

      <Container>
        <H2>Reach out to us</H2>
        <Name
          required={true}
          placeholder="Your name*"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Name
          required={true}
          placeholder="Your e-mail*"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Message
          required={true}
          value={message}
          placeholder="Your message*"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <MyButton onClick={submitForm}>Send message</MyButton>
      </Container>
    </>
  );
};

export default Form;
