import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color:#b3fff0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-color: #ffd966;
`;

const Desc = styled.div`
  font-size: 22px;
  font-weight: 200;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 70%;
  height: 35px;
  background-color: #ffd966;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ff66ff;
  color: white;
  cursor: pointer;
`;

const Tuned = () => {
  return (
    <Container>
      <Title>Stay Tuned</Title>
      <Desc>Subscibe to get fastest updates on your favourite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Tuned;