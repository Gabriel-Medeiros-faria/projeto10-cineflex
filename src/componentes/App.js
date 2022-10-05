import Navbar from "./Navbar";
import GlobalStyled from "./GlobalStyled";
import styled from "styled-components"
import ContainerScreen from "./Container-screen";

export default function App() {
    return (
        <>
            <GlobalStyled/>
        <Container>
            <Navbar/>
            <ContainerScreen/>
        </Container>    
        </>
    );
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
`