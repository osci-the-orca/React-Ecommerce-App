import styled from "styled-components";
import { Category } from "../pages/data";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 4px black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: 600;

  cursor: pointer;
`;

interface Props {
  item: Category;
}

const CategoryItem = ({ item }: Props) => {
  return (
    <Container>
      <Image src={item.img} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
