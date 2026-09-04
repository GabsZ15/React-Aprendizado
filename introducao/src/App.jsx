import React from "react"
import "./index.css"

function App() {

  let [cliques, setCliques] = React.useState(0)
  let [nome, setNome] = React.useState("Aguardando")  //Maneira 1 (Arrow Function)

    function mudarNome(){    // Maneira 2 (Function)
      setNome("Gabriel")
    }


  function aumentarClique() {
    setCliques(cliques + 1)
  }
 


  return (
    <div>

      <h1>Olá, Mundo!</h1>
      <p>Estou aprendendo React!</p>
    
    <hr/>

    <p> Meu nome é: {nome}</p>
    
    <p>Maneira 1 (Arrow Function):</p>
    <button onClick={() => setNome("Gabriel")}>Carregar Nome</button> 

    <hr/>

    <p>Maneira 2 (Function):</p>
    <button onClick={mudarNome}>Mudar Nomee!</button>  


    <hr/>
    
    <p> Você clicou {cliques} vezes</p>
    <button onClick={aumentarClique}> Clique aqui </button>
  
    <hr></hr>
    </div>
  )




}

export default App
