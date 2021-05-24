import React from 'react';

export default function Propriedades(props){
    return(
        <div>
            <h1>Nome: {props.nome} {props.sobrenome}</h1>
            <h1>Idade: {props.idade}</h1>
        </div>
    )
}