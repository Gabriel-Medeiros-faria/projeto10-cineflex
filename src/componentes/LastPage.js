import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import {exportMovie} from "./SeatPage"
import {exportOptionSelected} from "./SeatPage"
import {exportInputName} from "./SeatPage"
import {exportCPF} from "./SeatPage"
import { exportDaysDate } from "./SeatPage";
import { exportHour } from "./SeatPage";

export default function LastPage(){

    const navigate = useNavigate()

function BackHome(){
    navigate("/")
}

    return(
        <>
            <Navbar/>
            <Container>
                <h1>Pedido feito com sucesso !!</h1>
                <div className="PedidoeSessao">
                    <h2>Pedido e sessão</h2>
                    <p>{exportMovie}</p>
                    <p>{exportDaysDate.date} - {exportHour.name}</p>
                </div>
                <div className="Ingressos">
                    <h2>Ingressos</h2>
                    {exportOptionSelected.map((numero)=><p>Ingresso {numero}</p>)}
                    
                </div>
                <div className="Comprador">
                    <h2>Comprador</h2>
                    <p>Nome: {exportInputName}</p>
                    <p>CPF: {exportCPF}</p>
                </div>
            </Container>
            
            <Home>
                <div onClick={()=>BackHome()}>Voltar para home</div>
            </Home>
            
        </>
    )
}

const Container = styled.div`
margin-left: 20px;

h1{
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 40px;
    color: green;
    display: flex;
    justify-content: center;
}
h2{
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
}
p{
    font-size: 25px;
}
`

const Home = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin-top: 150px;
margin-left: 60px;
width:300px;
height:60px;
color: white;
background-color: #E8833A;
font-size: 25px;
`