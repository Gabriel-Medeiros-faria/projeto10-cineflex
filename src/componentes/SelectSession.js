import Navbar from "./Navbar";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SelectSession() {
    let [SessionMovie, setSextionMovie] = useState([]);
    let [Movie, setMovie] = useState({})

    let { idFilme } = useParams();

    useEffect(() => {
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        );

        promisse.then((resp) => {
            setSextionMovie(resp.data.days);
            setMovie(resp.data)
        });
    }, []);
    return (
        <>
            <ContainerSessions>
                <Navbar />
                <p className="p">Selecione o horário</p>
                {SessionMovie.map((item) => (
                    <Sessions>
                        <div className="sessionInt">
                            <SessionDay>
                                <p>
                                    {item.weekday} - {item.date}
                                </p>
                            </SessionDay>
                            <SessionHour>
                                {item.showtimes.map((name) => (
                                    <Link to={`/assentos/${name.id}`}>
                                        <a>{name.name}</a>
                                    </Link>))}
                            </SessionHour>


                        </div>
                    </Sessions>
                ))}
            </ContainerSessions>

            <DownBar>
                <div className="boxImg">
                    <img src={Movie.posterURL}></img>
                </div>
                <p>{Movie.title}</p>
            </DownBar>

        </>
    );
}

const ContainerSessions = styled.div`
    box-shadow: 5px 5px gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 130px;
  .p {
    margin-left: 10px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

const Sessions = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
box-shadow: 2px 2px 2px;
width: 250px;
height: 130px;
margin-bottom: 30px;
border-radius: 10px;
`;
const SessionDay = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  position: relative;
`;

const SessionHour = styled.div`
  display: flex !important;
  justify-content: space-around;
  width: 200px;
  a {
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
  }
`;

const DownBar = styled.div`
.boxImg{
    background-color: white;
    padding:5px;
    margin-right: 10px;
    margin-top: 10px;
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