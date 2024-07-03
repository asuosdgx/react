import "./Mensagem.css";

function Mensagem(props) {
    return (
        <section className="secao">
            <h2 className="mensagem-titulo">{props.textoTitulo.toUpperCase()}</h2>
            <img src={props.linkImagem} alt="Imagem da mensagem"/>
            <p className="paragrafo">{props.paragrafo}</p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
        
    );
}

export default Mensagem;