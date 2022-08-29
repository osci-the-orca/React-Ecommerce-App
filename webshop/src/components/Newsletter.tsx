import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 5px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  background-color: white;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  flex: 15;
  border: none;
  padding-left: 15px;
`;

const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get the latest information about deals and products!</Description>
      <InputContainer>
        <Input placeholder="Your email.." />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
