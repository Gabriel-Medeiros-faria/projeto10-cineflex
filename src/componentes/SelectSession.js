import Navbar from "./Navbar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SelectSession() {
    let [SessionMovie, setSextionMovie] = useState([]);
    let { idFilme } = useParams();

    useEffect(() => {
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        );

        promisse.then((resp) => {
            setSextionMovie(resp.data.days);
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
                                    <div>{name.name}</div>
                                ))}
                            </SessionHour>
                            
                        </div>
                    </Sessions>
                ))}
            </ContainerSessions>
        </>
    );
}

const ContainerSessions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
background-color: gray;
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
  div {
      
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
