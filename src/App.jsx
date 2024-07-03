import Card_aluno from "./components/Card_aluno";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";
import Produto from "./components/Produto";

function App() {
  //*Componentes são, por convenção com a primeira letra maiúscula.

  return (
    
      <><Card_aluno
      nomeAluno="Braya"
      serie="7° Ano"
      media="4"
      foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoxeqX4w-_-w7aY9kUVlnln4t6Sn0RHSMEoI6XWo1PCR0IGYgWOEMarGtmlmfxgMBE30&usqp=CAU"

    >


    </Card_aluno><Card_aluno
      nomeAluno="Alana Tonini"
      serie="8° Ano"
      media="9"
      foto="https://tiinside.com.br/wp-content/uploads/2021/08/marina-Asper-_credito_divulgacao-1-scaled-e1628014859467.jpg"
    >
      </Card_aluno><>
        <Card_aluno
          nomeAluno="Ketlen"
          serie="9° Ano"
          media="7"
          foto="https://passport-photo.online/_optimized/prepare2.0498e1e2-opt-1920.WEBP"
        >
        </Card_aluno>
        <>

          <Produto
            nomeProduto="Ventilador Super Vento, 6 pás Cor Branco"
            precoOriginal="R$ 129.90"
            desconto={true}
            precoDesconto="R$ 103.90"
            percent="20% OFF"
          ></Produto>
          <Produto
            nomeProduto="Máquina de Lavar LavaBem 10 Kg, 8 Regulagens 127v"
            precoOriginal="R$ 1499.90"
            desconto={false}
            precoDesconto="R$ 4839.12"
            percent="12% OFF"
          ></Produto>
          <Produto
            nomeProduto="Geladeira FrostFree 220v, Branco com sistema Inverter"
            precoOriginal="R$ 5499.90"
            desconto={true}
            precoDesconto="R$ 4839.12"
            percent="12% OFF"

          ></Produto>
          <Produto
            nomeProduto="Freezer horizontal, 220v"
            precoOriginal="R$ 5499.90"
            desconto={false}
            precoDesconto="R$ 4839.12"
            percent="12% OFF"

          ></Produto>
          {/* <Mensagem
      textoTitulo="As batatas quando nascem se esparramam pelo chão"
      nomeAutor="J. Almir"
      paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      linkImagem="https://picsum.photos/200"
    />
    <Mensagem
      textoTitulo="As batatas quando nascem, morrem"
      nomeAutor="Douglas"
      paragrafo="Ficaram com Deus"
      linkImagem="https://picsum.photos/200"
    /> */}
        </>
        {/* <Navbar logado={true} nomeUsuario="Ch3rryb0mb"></Navbar> */}
      </></>
  )
}


export default App;
