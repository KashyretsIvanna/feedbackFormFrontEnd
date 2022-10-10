import { useEffect, useState } from "react";
import { Container, H2 } from "./Container";
import { Name } from "./Container";
import { MyButton } from "./Container";
import { Message } from "./Container";

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
      headers:{
        "Accept":"*/*",
        "Content-Type":"application/json",
        "Accept-Encoding":"gzip, deflate, br",
        "Connection":"keep-alive"

      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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
