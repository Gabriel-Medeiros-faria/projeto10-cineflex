import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ContainerScreen() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promisse = axios.get(
            "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        );
        let contador = 0;
        promisse.then((resp) => {
                setFilmes(resp.data)
        });
    }, []);
    console.log(filmes)
    return (
        <>
            <ContainerMovies>
                <p>Selecione o filme</p>
                <ListaFilmes>
                    {filmes.map((item)=> <Movie key={item.id}><img src={item.posterURL}/></Movie>)}
                    
                </ListaFilmes>
            </ContainerMovies>
        </>
    );
}

const ContainerMovies = styled.div`
p{
    display: flex;
    justify-content: center;
    font-size: 30px;
}`;

const ListaFilmes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Movie = styled.li`
img{width: 129px;
height: 193px;
margin:20px}

`;
