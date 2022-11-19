import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
export default function Home() {
  return (
    <Z.Home>
      <NavBarAtlantis />
      <main>
        <div className="conteudo">
          <h1>Seja bem vindo ao Antlatis!</h1>
          <p>
            Estamos felizes em compartilhar o novo ambiente digital do Antlatis.
            Ele dá continuidade ao processo de imersão em nossa essência e de
            reflexão sobre nosso propósito, iniciado em 20XX e materializado no
            evento que contou com o olhar apurado, contemporâneo e crítico do
            engenheiro Viktor, O arauto das maquinas, realizado em novembro
            passado, no Fatec Gaming.
          </p>
          <p>
            Desde então, renovamos a expressão de nossa marca e nosso nome, que
            assumiu a forma atenciosa com que já era chamado por nossos
            clientes, colaboradores e parceiros: ANTLATIS, acompanhado do
            complemento “parques aquáticos, clubes e hotéis”, resgatando o
            significado mais profundo da etimologia do termo “diversão”.
          </p>
        </div>
      </main>
    </Z.Home>
  );
}
