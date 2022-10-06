import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <ContainerNavbar>
            <TextNavbar>
                <Link to="/">
                    <a>CINEFLEX</a>
                </Link>
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
a{
all:unset;
cursor:pointer;
}

    text-decoration: none;
    display: flex;
    padding-top: 15px;
    justify-content: center;
    color: #E8833A;
    font-weight: 400;
    font-size: 34px;
`

