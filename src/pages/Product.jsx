import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Tuned from '../components/Tuned';
const Container = styled.div``;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Wrapper = styled.div`
padding: 50px;
display: flex;
`;
const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
          <ImgContainer>
            <Image src="https://pbs.twimg.com/media/EuMgEYAXMAAU3MW.jpg"/>
          </ImgContainer>
          <InfoContainer>
            <Title>Kilua Jacket</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem quasi earum a tenetur eum. Quod corrupti sunt ducimus praesentium.</Desc>
            <Price>RS 500</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color= "Blue"/>
                <FilterColor color= "gray"/>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XSmall</FilterSizeOption>
                  <FilterSizeOption>Small</FilterSizeOption>
                  <FilterSizeOption>Medium</FilterSizeOption>
                  <FilterSizeOption>Large</FilterSizeOption>
                  <FilterSizeOption>XLarge</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button>Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Tuned/>
        <Footer/>
    </Container>
  )
}

export default Product