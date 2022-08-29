import styled from "styled-components";
import { Category } from "../pages/data";

interface Props {
  item: Category;
}

const Container = styled.div``;

const CategoryItem = ({ item }: Props) => {
  return (
    <Container>
      <div>{item.title}</div>
      <img src={item.img} alt={item.title} />
    </Container>
  );
};

export default CategoryItem;
