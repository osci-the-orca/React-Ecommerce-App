import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material/";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "../components/Footer.style";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.webSHOP</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quam, in itaque ipsam illo officia laudantium aliquid placeat assumenda
          magnam temporibus architecto iure ipsa beatae voluptatem, consequuntur accusantium quidem! Minus! Consequatur doloremque laudantium
          exercitationem. Nam necessitatibus tempore voluptas adipisci sed quod error minima blanditiis similique, dignissimos nulla autem. Harum eius
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 1337st, Leetchester 69420
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +46 54 8383 33
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> osci-the-orca@github.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
export default Footer;
