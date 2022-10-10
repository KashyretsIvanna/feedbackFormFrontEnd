import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { L } from "../Form";
import { setFeedbacks } from "../../../redux/slice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 90vw;
  max-width: 1000px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  height: 100%;
`;

const Item = styled.div`
  width: 200px;
  height: auto;
  background-color: pink;
  height: 80px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 9px gray;
  padding: 5px;
  overflow: auto;
  margin-left: 10px;
`;

const Comments = () => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const URL = "https://lit-forest-96253.herokuapp.com/feedbacks";

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => {
        setComments(res);
        dispatch(setFeedbacks(res));
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <L to="/">Form</L>
      {comments.map((el) => (
        <Item key={nanoid()}>
          <div>
            <div>
              {el.firstName} {el.email}
            </div>
            <div>{el.message}</div>
          </div>
        </Item>
      ))}
    </Container>
  );
};

export default Comments;
