import { useState, useEffect } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"




export let exportMovie ;
export let exportOptionSelected;
export let exportInputName;
export let exportCPF;
export let exportDaysDate;
export let exportHour;


export default function SeatPage() {

    const navigate = useNavigate()
    const [seatList, setSeatList] = useState([])
    const [Movie, setMovie] = useState({})
    const [days, setDays] = useState({})
    const [hour, setHour] = useState({})
    const [optionSelected, setOptionSelected] = useState([])
    const [idSelected, setIdSelected] = useState([])
    const [inputName, setInputName] = useState()
    const [inputCPF, setInputCPF] = useState()
    const { idSessao } = useParams()

    exportOptionSelected = optionSelected
    exportInputName = inputName
    exportCPF = inputCPF

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((resp) => SetVariables(resp))
    }, [])

    function SetVariables(resp){
        setSeatList(resp.data.seats)
            setDays(resp.data.day)
            setMovie(resp.data.movie)
            setHour(resp.data)

            exportMovie = resp.data.movie.title
            exportDaysDate = resp.data.day
            exportHour = resp.data

    }

    function postAssets() {




        if(idSelected.length === 0 || !inputName || !inputCPF){
            alert('Selecione os assentos, digite seu nome e CPF')
        }


        else{
            const body = {
                ids: idSelected,
                name: { inputName },
                cpf: { inputCPF }
            }
    
            const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
        promisse.then(() => console.log("mandou"))
    
        promisse.catch(() => console.log("não foi")) 

        navigate("/sucesso")
        }
    
    }

    
    function ReservarAssentos(item) {
        setOptionSelected([...optionSelected, item.name])
        setIdSelected([...idSelected, item.id])
    }

    function assetsInd(){
        alert('Esse assento está indisponível')
    }

    function Seat(props) {

        if (optionSelected.includes(props.item.name)) {
            return (
                <>
                    <SingleSeatSelected>
                        <b onClick={() => ReservarAssentos(props.item)}>
                            {props.item.name}
                        </b>
                    </SingleSeatSelected>
                </>
            )
        }

        if (props.item.isAvailable === true) {

            return (
                <>
                    <SingleSeatTrue>
                        <b onClick={() => ReservarAssentos(props.item)}>
                            {props.item.name}
                        </b>
                    </SingleSeatTrue>
                </>
            )
        }

        else {
            return (
                <>

                    <SingleSeatFalse onClick={() => assetsInd()}>
                        <b>
                            {props.item.name}
                        </b>
                    </SingleSeatFalse>

                </>
            )
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <ContainerSeat >
                    <p>Selecionde o(s) assento(s)</p>
                    <Seats>
                        <Ullist>
                            {seatList.map((item) =>
                                <>
                                    <Seat item={item} data-identifier="seat"/>
                                </>
                            )}
                        </Ullist>
                    </Seats>

                    <Subtitle>
                        <div>
                            <div className="green" data-identifier="seat-selected-subtitle">

                            </div>
                            <p>Selecionado</p>
                        </div>
                        <div>
                            <div className="gray" data-identifier="seat-available-subtitle">

                            </div>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <div className="yellow" data-identifier="seat-unavailable-subtitle">

                            </div>
                            <p>Indisponível</p>
                        </div>
                    </Subtitle>
                </ContainerSeat>
                <ContainerIputs>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." onChange={(e) => setInputName(e.target.value)} data-identifier="buyer-name-input"></input>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..." onChange={(e) => setInputCPF(e.target.value)} data-identifier="buyer-cpf-input"></input>
                </ContainerIputs>

                
                    <ReservarAssento>
                        <button onClick={() => postAssets()} data-identifier="reservation-btn">Reservar Assento(s)</button>
                    </ReservarAssento>
                

                <DownBar>
                    <div className="boxImg">
                        <img src={Movie.posterURL}></img>
                    </div>
                    <InfoMovie>
                        <p>{Movie.title}</p>
                        <p data-identifier="movie-and-session-infos-preview">{days.weekday} - {hour.name}</p>
                    </InfoMovie>
                </DownBar>
            </Container>
        </>
    )

}


const Container = styled.div`
margin-bottom: 390px;
`
const ContainerSeat = styled.div`
p{
    font-size: 25px;
    margin-bottom: 30px;
};
display: flex;
flex-direction: column;
align-items: center;
`
const Seats = styled.div`
display: flex;
flex-wrap: wrap;
`

const Ullist = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 20px;
`

const SingleSeatTrue = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
width: 28px;
margin: 5px;
font-size: 20px;
background-color: #C3CFD9;
border: 1px solid #808F9D;
`
const SingleSeatFalse = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 40px;
width: 28px;
margin: 5px;
font-size: 20px;
background-color: #FBE192;
border: 1px solid #F7C52B;
`
const DownBar = styled.div`
.boxImg{
    background-color: white;
    padding:5px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
};
img{
    width: 70px;
};
p{
    font-size: 30px;
};
position: fixed;
bottom: 0;
justify-content: center;
display: flex;
align-items: center;
width: 100%;
height:auto;
background-color: #9EADBA;

`
const InfoMovie = styled.div`
display: flex;
flex-direction:column;
`

const Subtitle = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
};
p{
    font-size: 20px;
};
.green{
    border-radius: 20px;
    width: 20px;
    height: 20px;
    background-color:#1AAE9E;
    border: 1px solid #0E7D71;
};
.gray{
    border-radius: 20px;
    width: 20px;
    height: 20px;
    background-color:#C3CFD9;
    border: 1px solid #7B8B99;
    
};
.yellow{
    border-radius: 20px;
    width: 20px;
    height: 20px;
    background-color:#FBE192;
    border: 1px solid #F7C52B;
};

`

const SingleSeatSelected = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 40px;
width: 28px;
margin: 5px;
font-size: 20px;
background-color: #1AAE9E;
border: 1px solid #0E7D71;
`

const ContainerIputs = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
    p{
        font-size: 20px;
        margin-bottom: 5px;
    }
    input{
        width: 327px;
        height: 51px;
        font-size: 25px;
        margin-bottom: 15px;
    }
`
const ReservarAssento = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;

button{
    font-size: 18px;
    border: none;
    width: 225px;
height: 42px;
color: white;
background-color: #E8833A;
}

`