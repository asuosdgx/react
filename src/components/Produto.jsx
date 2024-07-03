import "./Produto.css"

function Produto(props){

    
    return(     
       <section className="area">
        <h3 className="anuncio">{props.nomeProduto}</h3>
        {props.desconto? <><h4 className="desconto">{props.precoOriginal}</h4><h4 className="sem-desconto">{props.precoDesconto}</h4></>: <h4 className="sem-desconto">{props.precoOriginal}</h4> }
        <div className="prices">
        {props.desconto ?<h4 className="porcentagem">{props.percent}</h4>: null}
        </div>
        </section>

    );
}

export default Produto