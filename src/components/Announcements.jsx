import styled from 'styled-components'
const Container = styled.div`
    height: 30px;
    background-color: Indianred;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcements = () => {
  return (
    <Container>Get FREE Shipping on orders above RS 1000</Container>
  )
}

export default Announcements