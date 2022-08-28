import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftIcon />
      </Arrow>
      <Arrow>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
