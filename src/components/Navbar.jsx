//* Renderização Condicional com If

function Navbar(props){
        let mensagem ;
        
        if(props.logado){
            mensagem = `Bem-vindo(a)! ${props.nomeUsuario}`;
        }
        else{
            mensagem = "Você está desconectado";
        }
    
        return(
            <header>
                
                <p>
                    {props.logado ? `Bem vindo ${props.nomeUsuario}`:
                    "Vocês está desconectado!"}
                 </p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Postagens</a></li>
                        {props.logado &&  <li><a href="#">Meu Perfil</a></li>}
                        {props.logado &&  <li><a href="#">Sair</a></li>}
                        {!props.logado && <li><a href="#">Entrar</a></li>}
                    </ul>
                    <hr></hr>
                </nav>
             </header>

        )
    }

export default Navbar
