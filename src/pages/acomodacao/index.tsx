import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

const acomodacoes = {
  acomodacao: [
    {
      nome: "Casal Simples",
      CS: 0,
      CC: 1,
      S: 1,
      Cli: true,
      G: 1,
    },
    {
      nome: "Familia Simples",
      CS: 2,
      CC: 1,
      S: 1,
      Cli: true,
      G: 1,
    },
    {
      nome: "Familia Mais",
      CS: 5,
      CC: 1,
      S: 2,
      Cli: true,
      G: 2,
    },
    {
      nome: "Familia Super",
      CS: 6,
      CC: 2,
      S: 3,
      Cli: true,
      G: 2,
    },
    {
      nome: "Solteiro Simples",
      CS: 1,
      CC: 0,
      S: 1,
      Cli: true,
      G: 0,
    },
    {
      nome: "Solteiro Mais",
      CS: 0,
      CC: 1,
      S: 1,
      Cli: true,
      G: 1,
    },
  ],
};
export default function Acomodacao() {
  function converterBooleano(valor: Boolean) {
    if (valor) {
      return `Sim`;
    } else {
      return `Não`;
    }
  }
  return (
    <Z.Main>
      <NavBarAtlantis />
      <main>
        <div className="acomodacao">
          {acomodacoes.acomodacao.map((i) => {
            return (
              <Accordion>
                <Accordion.Item className="acorde" eventKey="0">
                  <Accordion.Header className="header">
                    <div className="header-main">Reserve: {i.nome} </div>
                  </Accordion.Header>
                  <Accordion.Body className="body">
                    <h3>Cama Solteiro</h3>
                    <span>Quantidade: {i.CS}</span>
                    <h3>Cama Casal</h3>
                    <span>Quantidade: {i.CC}</span>
                    <h3>Climatização</h3>
                    <span>
                      Possui climatização? - {converterBooleano(i.Cli)}
                    </span>
                    <h3>Garagem</h3>
                    <span>Quantidade: {i.G}</span>
                    <h3>Suite</h3>
                    <span> Quantidade: {i.S}</span>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </div>
      </main>
    </Z.Main>
  );
}
