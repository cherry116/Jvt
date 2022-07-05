import styled from "styled-components"
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialMedia = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                ANI MERCH
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eius officiis! A velit rerum placeat aspernatur quam corporis, architecto, voluptate repellendus aliquam unde pariatur saepe provident labore neque aperiam eius.
            </Desc>
            <SocialMedia>
                <SocialIcon color="3B5999"><Facebook /></SocialIcon>
                <SocialIcon color="E4405F"><Instagram /></SocialIcon>
                <SocialIcon color="E60023"><Pinterest /></SocialIcon>
                <SocialIcon color="55ACEE"><Twitter /></SocialIcon>
            </SocialMedia>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Tuned</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>8240 20/8 sector 22 </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 8547589964</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}} />Animerch.gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  );
};
export default Footer;