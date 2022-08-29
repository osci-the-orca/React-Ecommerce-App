import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import { ProductItem } from "../pages/data";

const Info = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 20;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  overflow: hidden;
`;

const Image = styled.img`
  height: 75%;
  z-index: 10;
`;

const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

interface Props {
  item: ProductItem;
}

const Product = ({ item }: Props) => {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
      </Circle>
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
