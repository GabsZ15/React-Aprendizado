import React, { useState } from "react";

function Formulario() {

    let [nome, setNome] = React.useState("");

    let [idade, setIdade] = React.useState("");

    let [estado, setEstado] = React.useState("");
    let [cidade, setCidade] = React.useState("");

    function salvarTudo(){
        if(nome.length < 3){
            alert("Nome invalido");
            return;
        }

        if(idade === "" || Number(idade) <= 0){
            alert("Idade Invalida");
            return;
        }

        if(estado.length < 2){
            alert("Estado invalido");
            return;
        }

        if(cidade.length < 2){
            alert("Cidade invalida");
            return;
        }

        let localizacao = cidade + " - " + estado;
        alert("Bem vindo, " + nome + "! Você tem " + idade + " anos e mora em " + localizacao);
    }


    return (
        <div>


            <h1>Página de formulario</h1>
            <p> Aprendendo a usar o input no React </p>



            <p> Nome: </p>
            <input onChange = {e => setNome(e.target.value)}  />
            <br></br>
            <br></br>



              <p> Idade: </p>
            <input onChange = {e => setIdade(e.target.value)}  />
            <br></br>
            <br></br>




              <p> Onde mora: </p>
            <input placeholder="Estado (ex: SP)" onChange = {e => setEstado(e.target.value)}  />
            <input placeholder="Cidade" onChange = {e => setCidade(e.target.value)}  />
            <br></br>
            <br></br>
            <button onClick={salvarTudo}>Salvar</button>



        </div>
    );
} 

export default Formulario;