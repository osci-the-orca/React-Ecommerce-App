import styled from "styled-components";
import { categories } from "../pages/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  width: 500px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
