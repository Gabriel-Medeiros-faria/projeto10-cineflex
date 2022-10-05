import styled from "styled-components"

export default function Navbar(){
    return(
        <ContainerNavbar>
            <TextNavbar>
                <h1>CINEFLEX</h1>
            </TextNavbar>
        </ContainerNavbar>
    )
}

const ContainerNavbar = styled.div`
height: 67px;
width:100%;
background-color: #C3CFD9;
margin-bottom: 20px;
`

const TextNavbar = styled.div`
    display: flex;
    padding-top: 15px;
    justify-content: center;
    color: #E8833A;
    font-weight: 400;
    font-size: 34px;
`
    
