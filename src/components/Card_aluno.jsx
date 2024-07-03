import "./Card_aluno.css";
function Card_aluno(props) {
  return (
    <section className="card">
      <h2>Bem Vindo!(a) {props.nomeAluno} </h2>
      <img src={props.foto} alt="foto-aluno" className="img-aluno"></img>
      <h3>Série: {props.serie}</h3>
      <h3>Média: {props.media}</h3>
      {props.media >= 7 && <p className="aprovado">Voce está Aprovado(a)!</p>}
      {props.media < 7 && (
        <p className="reprovado">Você não atingiu a média e reprovou.</p>
      )}
    </section>
  );
}

export default Card_aluno;
