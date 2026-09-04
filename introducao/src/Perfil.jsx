import { useState } from "react";

function Perfil() {

    let [exibirPerfil, setExibirPerfil] = useState(false);


    let usuario = {
        nome: "Gabriel",
        email: "gabriel@gmail.com",
        senha: "biel123"
    };


    return(

        <div>
            <h1>Perfil do usuário</h1>
            <p>Veja aqui as informações do seu perfil👇 </p>
              
           {  
            exibirPerfil == true ?
            <button onClick={() => setExibirPerfil(false)}>Ocultar Perfil</button>
            :
            <button onClick={() => setExibirPerfil(true)}>Ver Perfil</button>

           }
          

        

    

        {
           
        exibirPerfil == true ? 
        <div>
        <p>Nome: {usuario.nome}</p>
        <p>Email: {usuario.email}</p>
        </div>
              
        :    
            <p></p>
        }





        
        </div>

    )

}

export default Perfil