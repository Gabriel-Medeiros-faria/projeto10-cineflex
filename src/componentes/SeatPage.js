import { useState, useEffect } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function SeatPage() {
    const [seatList, setSeatList] = useState([])
    const [Movie, setMovie] = useState({})
    const [days, setDays] = useState({})
    const [hour, setHour] = useState({})
    const { idSessao } = useParams()

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((resp) => {
            setSeatList(resp.data.seats)
            setDays(resp.data.day)
            setMovie(resp.data.movie)
            setHour(resp.data)
        })
    }, [])

    function Seat(props) {

        if (props.item.isAvailable === true) {

            return (
                <>
                    <SingleSeatTrue>
                        <b>
                            {props.item.name}
                        </b>
                    </SingleSeatTrue>
                </>
            )
        }

        else {
            return (
                <>

                    <SingleSeatFalse>
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
                                    <Seat item={item} />
                                    {console.log(item)}
                                </>
                            )}

                        </Ullist>
                    </Seats>

                    <Subtitle>
                        <div>
                            <div className="green">

                            </div>
                            <p>Selecionado</p>
                        </div>
                        <div>
                            <div className="gray">

                            </div>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <div className="yellow">

                            </div>
                            <p>Indisponível</p>
                        </div>
                    </Subtitle>
                </ContainerSeat>
            </Container>
            <DownBar>
                <div className="boxImg">
                    <img src={Movie.posterURL}></img>
                </div>
                <InfoMovie>
                    <p>{Movie.title}</p>
                    <p>{days.weekday} - {hour.name}</p>
                </InfoMovie>
            </DownBar>
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
margin-bottom: 20px;
`

const SingleSeatTrue = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
width: 40px;
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
width: 40px;
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
justify-content: space-between;
div{
margin-right: 20px;
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