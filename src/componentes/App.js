import PaginaInicial from "./PáginaInicial";
import GlobalStyled from "./GlobalStyled";
import styled from "styled-components";
import SelectSession from "./SelectSession";
import SeatPage from "./SeatPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
        <BrowserRouter>
            <GlobalStyled />
            <Container>
                <Routes>
                <Route path="/" element={<PaginaInicial/>}/> 
                <Route path="/sessoes/:idFilme" element={<SelectSession/>}/>
                <Route path="/assentos/:idSessao" element={<SeatPage/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
        </>
    );
}

const Container = styled.div`

`;
